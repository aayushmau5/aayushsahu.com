import styles from "@/styles/MdxComponentStyles/HiddenExpand.module.css";

export default function HiddenExpand({ summary, children }) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{summary}</summary>
      <div className={styles.children}>{children}</div>
    </details>
  );
}
