import dynamic from "next/dynamic";

/* eslint-disable @next/next/no-img-element */
import Date from "../../../Date";
import styles from "./style.module.css";
import ToC from "../ToC";
import SeparatorSvg from "../../SeparatorSvg";
import Tag from "../TagsContainer/Tag";
import TagsContainer from "../TagsContainer";

const GiscusComments = dynamic(() => import("../GiscusComments"));

export default function BlogContainer({
  children,
  frontMatter,
  tableOfContents,
}) {
  return (
    <div className={styles.container}>
      <ShowFrontMatter frontMatter={frontMatter} />
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

function ShowFrontMatter({ frontMatter }) {
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
