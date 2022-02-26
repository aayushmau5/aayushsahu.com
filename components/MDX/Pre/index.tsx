import styles from "./style.module.css";

export default function Pre({ ...props }) {
  return (
    <div className={styles.container}>
      <pre
        {...props}
        className={`${props.className ? props.className : ""} ${styles.pre}`}
      />
    </div>
  );
}
