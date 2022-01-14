import styles from "./style.module.css";

export default function Tag({
  value,
  isSelected = false,
  onClick = (value: string) => {},
}) {
  return (
    <div
      className={`${styles.container} ${isSelected ? styles.selected : ""}`}
      onClick={() => onClick(value)}
    >
      {value.toUpperCase()}
    </div>
  );
}
