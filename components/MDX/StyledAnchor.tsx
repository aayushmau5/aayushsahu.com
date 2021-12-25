import styles from "@/styles/MdxComponentStyles/StyledAnchor.module.css";

export default function StyledAnchor(props) {
  return <a {...props} className={styles.anchor} />;
}
