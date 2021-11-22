import Date from "./Date";
import styles from "../styles/BlogContainer.module.css";

export default function BlogContainer({ blogData }) {
  return (
    <div className={styles.container}>
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
      <hr />
      <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
    </div>
  );
}
