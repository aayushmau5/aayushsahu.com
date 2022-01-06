import styles from "./style.module.css";

export default function Pre({ languageType = "", ...props }) {
  return (
    <div
      className={`${styles.container} ${
        languageType ? styles.marginTop48 : ""
      }`}
    >
      {languageType ? (
        <div className={styles.languageTypeContainer}>{languageType}</div>
      ) : null}
      <pre
        {...props}
        className={`${props.className ? props.className : ""} ${styles.pre}`}
      />
    </div>
  );
}
