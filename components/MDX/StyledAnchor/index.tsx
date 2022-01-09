import styles from "./style.module.css";

export default function StyledAnchor(props) {
  if (props.href.startsWith("#")) {
    return <a {...props} className={styles.anchor} />;
  }

  return (
    <a
      {...props}
      className={styles.anchor}
      target="_blank"
      rel="noreferrer noopener"
    />
  );
}
