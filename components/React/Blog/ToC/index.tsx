import styles from "./style.module.css";

export default function TableOfContents({ toc }) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>Table of Contents</summary>
      <div className={styles.list} dangerouslySetInnerHTML={{ __html: toc }} />
    </details>
  );
}
