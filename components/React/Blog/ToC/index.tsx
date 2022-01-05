import styles from "./style.module.css";

interface Props {
  toc: string;
}

export default function TableOfContents({ toc }: Props) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>Table of Contents</summary>
      <div dangerouslySetInnerHTML={{ __html: toc }} />
    </details>
  );
}
