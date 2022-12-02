import styles from "./style.module.css";

export default function Badge({ status }) {
  return (
    <div className={styles.container} title="Current status">
      <span className={styles.dot}></span> <span>{status}</span>
    </div>
  );
}
