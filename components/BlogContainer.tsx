/* eslint-disable @next/next/no-img-element */
import Date from "./Date";
import styles from "@/styles/BlogContainer.module.css";
import ToC from "./ToC";
import SeparatorSvg from "./SeparatorSvg";

export default function BlogContainer({
  children,
  frontMatter,
  tableOfContents,
}) {
  return (
    <div className={styles.container}>
      <ShowFrontMatter frontMatter={frontMatter} />
      <SeparatorSvg stroke="gray" />
      <ShowToc frontMatter={frontMatter} tableOfContents={tableOfContents} />
      <article>{children}</article>
    </div>
  );
}

function ShowToc({ frontMatter, tableOfContents }) {
  if (tableOfContents?.length === 0) return null;
  if (typeof frontMatter.showToc === "undefined") {
    return <ToC elements={tableOfContents} />;
  } else {
    if (frontMatter.showToc) {
      return <ToC elements={tableOfContents} />;
    } else {
      return null;
    }
  }
}

function ShowFrontMatter({ frontMatter }) {
  return (
    <div>
      <h2 className={styles.title}>{frontMatter.title}</h2>
      <p className={styles.description}>{frontMatter.description}</p>
      <p className={styles.otherInfo}>
        <span>by aayushmau5</span>
        {" · "}
        <span>
          Published on <Date dateString={frontMatter.date} />
        </span>
        {" · "}
        <span>{frontMatter.readingTime.text}</span>
      </p>
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
