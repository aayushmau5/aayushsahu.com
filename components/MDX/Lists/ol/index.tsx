import styles from "./style.module.css";

export default function CustomOl({ ...props }) {
  return <ol {...props} className={styles.ol} />;
}
