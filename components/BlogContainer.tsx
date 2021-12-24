/* eslint-disable @next/next/no-img-element */
import Date from "./Date";
import styles from "@/styles/BlogContainer.module.css";

export default function BlogContainer({ children, frontMatter }) {
  return (
    <div className={styles.container}>
      <article>
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
        <hr className={styles.hr} />
        {children}
      </article>
    </div>
  );
}
