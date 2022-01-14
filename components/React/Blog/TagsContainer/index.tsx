import styles from "./style.module.css";

export default function TagsContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
