/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import Date from "./Date";
import styles from "../styles/BlogContainer.module.css";

export default function BlogContainer({ blogData }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-coy-without-shadows.min.css"
          rel="stylesheet"
        />
      </Head>
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
        {blogData.cover && (
          <div className={styles.coverImage}>
            <img src={blogData.cover.image} alt={blogData.cover.alt} />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
      </article>
    </div>
  );
}
