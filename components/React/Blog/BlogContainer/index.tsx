/* eslint-disable @next/next/no-img-element */
import { Channel, Presence } from "phoenix";
import { useState, useContext, useEffect } from "react";

import Date from "../../../Date";
import styles from "./style.module.css";
import ToC from "../ToC";
import SeparatorSvg from "../../SeparatorSvg";
import Tag from "../TagsContainer/Tag";
import TagsContainer from "../TagsContainer";
import GiscusComments from "../GiscusComments";
import { SocketContext } from "@/components/Phoenix/Socket";

export default function BlogContainer({
  children,
  frontMatter,
  tableOfContents,
  slug,
}) {
  return (
    <div className={styles.container}>
      <ShowFrontMatter frontMatter={frontMatter} slug={slug} />
      <SeparatorSvg stroke="gray" header />
      <ShowToc tableOfContents={tableOfContents} />
      <article>{children}</article>
      <GiscusComments />
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

function ShowFrontMatter({ frontMatter, slug }) {
  return (
    <div>
      <h2 className={styles.title}>{frontMatter.title}</h2>
      <p className={styles.description}>{frontMatter.description}</p>
      <p className={styles.otherInfo}>
        <span>
          Published on <Date dateString={frontMatter.date} />
        </span>
        {" · "}
        <span>{frontMatter.readingTime.text}</span>
        {" · "}
        <UsersOnline slug={slug} />
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

function UsersOnline({ slug }) {
  const [usersOnline, setUsersOnline] = useState(1);
  const socket = useContext(SocketContext);

  useEffect(() => {
    let phoenixChannel: Channel;
    if (socket) {
      phoenixChannel = socket.channel(`blog:${slug}`);
      let presence = new Presence(phoenixChannel);
      presence.onSync(() => {
        presence.list((_id, { metas: metas }) => {
          setUsersOnline(metas.length);
        });
      });

      phoenixChannel.join().receive("ok", () => {
        console.log("joined channel blog channel");
      });
    }

    // leave the channel when the component unmounts
    return () => {
      if (socket && phoenixChannel) phoenixChannel.leave();
    };
  }, [socket, slug]);

  return <span>{usersOnline} reading right now</span>;
}
