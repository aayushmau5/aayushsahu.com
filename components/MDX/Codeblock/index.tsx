import styles from "./style.module.css";

export default function CodeBlock({ ...props }) {
  return <code {...props} className={styles.code} />;
}
