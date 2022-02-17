import styles from "./style.module.css";

interface Props {
  title: string;
  children: any;
}

export default function CardWithTitle({ title, children }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
