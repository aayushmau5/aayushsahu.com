/* eslint-disable @next/next/no-img-element */
import { Channel, Presence } from "phoenix";
import { useState, useContext, useEffect } from "react";

import Date from "../../../Date";
import styles from "./style.module.css";
import ToC from "../ToC";
import SeparatorSvg from "../../SeparatorSvg";
import Tag from "../TagsContainer/Tag";
import TagsContainer from "../TagsContainer";
import { SocketContext } from "@/components/Phoenix/Socket";

export default function BlogContainer({
  children,
  frontMatter,
  tableOfContents,
  slug,
}) {
  const [phoenixChannel, setPhoenixChannel] = useState<Channel>(null);
  const socket = useContext(SocketContext);

  useEffect(() => {
    if (socket && !phoenixChannel) {
      const channel = socket.channel(`blog:${slug}`);

      channel
        .join()
        .receive("ok", () => console.log("joined blog channel"))
        .receive("error", (resp) => console.log("unable to join", resp));

      setPhoenixChannel(channel);
    }

    // leave the channel when the component unmounts
    return () => {
      if (socket && phoenixChannel) {
        phoenixChannel.leave();
        console.log("left blog channel");
        setPhoenixChannel(null);
      }
    };
  }, [socket, slug, phoenixChannel]);

  return (
    <div className={styles.container}>
      <ShowFrontMatter
        frontMatter={frontMatter}
        slug={slug}
        phoenixChannel={phoenixChannel}
      />
      <SeparatorSvg stroke="gray" header />
      <ShowToc tableOfContents={tableOfContents} />
      <article>{children}</article>
      <LikeButton phoenixChannel={phoenixChannel} slug={slug} />
    </div>
  );
}

function ShowToc({ tableOfContents }: { tableOfContents: string }) {
  // tableOfContents might be null
  if (tableOfContents !== null) {
    if (tableOfContents.length === 0) return null;
    return <ToC toc={tableOfContents} />;
  } else {
    tableOfContents;
    return null;
  }
}

function ShowFrontMatter({ frontMatter, slug, phoenixChannel }) {
  return (
    <div>
      <h2 className={styles.title}>{frontMatter.title}</h2>
      <p className={styles.description}>{frontMatter.description}</p>
      <p className={styles.otherInfo}>
        <span>
          Published on{" "}
          <span style={{ color: "white" }}>
            <Date dateString={frontMatter.date} />
          </span>
        </span>
        {" · "}
        <span>{frontMatter.readingTime.text}</span>
        {" · "}
        <UsersOnline slug={slug} phoenixChannel={phoenixChannel} />
      </p>
      {frontMatter.tags ? (
        <TagsContainer>
          {frontMatter.tags.map((tag: string) => (
            <Tag key={tag} value={tag} />
          ))}
        </TagsContainer>
      ) : null}
      {frontMatter.cover && frontMatter.cover.image && (
        <div className={styles.coverImage}>
          <img src={frontMatter.cover.image} alt={frontMatter.cover.alt} />
        </div>
      )}
      {frontMatter.cover && frontMatter.cover.caption && (
        <div
          className={styles.caption}
          dangerouslySetInnerHTML={{ __html: frontMatter.cover.caption }}
        />
      )}
    </div>
  );
}

function LikeButton({
  slug,
  phoenixChannel,
}: {
  slug: string;
  phoenixChannel: Channel;
}) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  const likeBlog = () => {
    phoenixChannel.push("like", { topic: `blog:${slug}` });
    setHasLiked(true);
  };

  useEffect(() => {
    if (phoenixChannel) {
      phoenixChannel.on("likes-count", (response) => {
        setLikes(response.count);
      });
    }
  }, [phoenixChannel]);

  return (
    <div className={styles.likeContainer}>
      <div>
        {likes} {likes === 1 ? "like" : "likes"}{" "}
      </div>
      <button
        onClick={likeBlog}
        className={styles.likeButton}
        disabled={hasLiked}
      >
        <svg height="35px" width="35px" viewBox="0 0 490 490">
          <path
            d="M316.554,108.336c4.553,6.922,2.629,16.223-4.296,20.774c-3.44,2.261-6.677,4.928-9.621,7.929
	c-2.938,2.995-6.825,4.497-10.715,4.497c-3.791,0-7.585-1.427-10.506-4.291c-5.917-5.801-6.009-15.298-0.207-21.212
	c4.439-4.524,9.338-8.559,14.562-11.992C302.698,99.491,312.002,101.414,316.554,108.336z M447.022,285.869
	c-1.506,1.536-148.839,151.704-148.839,151.704C283.994,452.035,265.106,460,245,460s-38.994-7.965-53.183-22.427L42.978,285.869
	c-57.304-58.406-57.304-153.441,0-211.847C70.83,45.634,107.882,30,147.31,30c36.369,0,70.72,13.304,97.69,37.648
	C271.971,43.304,306.32,30,342.689,30c39.428,0,76.481,15.634,104.332,44.021C504.326,132.428,504.326,227.463,447.022,285.869z
	 M425.596,95.028C403.434,72.44,373.991,60,342.69,60c-31.301,0-60.745,12.439-82.906,35.027c-1.122,1.144-2.129,2.533-3.538,3.777
	c-7.536,6.654-16.372,6.32-22.491,0c-1.308-1.352-2.416-2.633-3.538-3.777C208.055,72.44,178.612,60,147.31,60
	c-31.301,0-60.744,12.439-82.906,35.027c-45.94,46.824-45.94,123.012,0,169.836c1.367,1.393,148.839,151.704,148.839,151.704
	C221.742,425.229,233.02,430,245,430c11.98,0,23.258-4.771,31.757-13.433l148.839-151.703l0,0
	C471.535,218.04,471.535,141.852,425.596,95.028z M404.169,116.034c-8.975-9.148-19.475-16.045-31.208-20.499
	c-7.746-2.939-16.413,0.953-19.355,8.698c-2.942,7.744,0.953,16.407,8.701,19.348c7.645,2.902,14.521,7.431,20.436,13.459
	c23.211,23.658,23.211,62.153,0,85.811l-52.648,53.661c-5.803,5.915-5.711,15.412,0.206,21.212
	c2.921,2.863,6.714,4.291,10.506,4.291c3.889,0,7.776-1.502,10.714-4.497l52.648-53.661
	C438.744,208.616,438.744,151.275,404.169,116.034z"
          />
        </svg>
      </button>
    </div>
  );
}

function UsersOnline({ slug, phoenixChannel }) {
  const [usersOnline, setUsersOnline] = useState(1);
  const [totalReads, setTotalReads] = useState(1);

  useEffect(() => {
    if (phoenixChannel) {
      let presence = new Presence(phoenixChannel);
      presence.onSync(() => {
        presence.list((_id, { metas: metas }) => {
          setUsersOnline(metas.length);
        });
      });

      phoenixChannel.on("blog-view-count", (response) => {
        setTotalReads(response.count);
      });
    }
  }, [phoenixChannel, slug]);

  return (
    <>
      <span style={{ color: "white" }}>
        {totalReads} {totalReads === 1 ? "view" : "views"}
      </span>
      {" · "}
      <span style={{ color: "white" }}> {usersOnline} reading right now</span>
    </>
  );
}
