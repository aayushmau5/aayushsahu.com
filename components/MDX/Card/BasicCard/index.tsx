import styles from "./style.module.css";

export default function BasicCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}
