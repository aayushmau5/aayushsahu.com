import styles from "./style.module.css";

export default function Pre({ ...props }) {
  return (
    <pre
      {...props}
      className={`${props.className ? props.className : ""} ${styles.pre}`}
    />
  );
}
