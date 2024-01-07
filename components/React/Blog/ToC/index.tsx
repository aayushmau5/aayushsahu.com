import styles from "./style.module.css";

export default function TableOfContents({ headings }) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>Table of Contents</summary>
      <div className={styles.container}>
        {headings.map((heading) => {
          return (
            <div className={styles.list} key={`#${heading.slug}`}>
              <a data-level={heading.level} href={`#${heading.slug}`}>
                {heading.text}
              </a>
            </div>
          );
        })}
      </div>
    </details>
  );
}
