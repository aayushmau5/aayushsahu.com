import styles from "./style.module.css";

export default function CustomUl({ ...props }) {
  return <ul {...props} className={styles.ul} />;
}
