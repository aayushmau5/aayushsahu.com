/* eslint-disable @next/next/no-img-element */
import Date from "./Date";
import styles from "@/styles/BlogContainer.module.css";

export default function BlogContainer({ blogData }) {
  return (
    <div className={styles.container}>
      <article>
        <h2 className={styles.title}>{blogData.title}</h2>
        <p className={styles.description}>{blogData.description}</p>
        <p className={styles.otherInfo}>
          <span>by aayushmau5</span>
          {" · "}
          <span>
            Published on <Date dateString={blogData.date} />
          </span>
          {" · "}
          <span>{blogData.readingTime.text}</span>
        </p>
        {blogData.cover && blogData.cover.image && (
          <div className={styles.coverImage}>
            <img src={blogData.cover.image} alt={blogData.cover.alt} />
          </div>
        )}
        {blogData.cover && blogData.cover.caption && (
          <div
            className={styles.caption}
            dangerouslySetInnerHTML={{ __html: blogData.cover.caption }}
          />
        )}
        <hr className={styles.hr} />
        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
      </article>
    </div>
  );
}
