import styles from "./style.module.css";

interface Props {
  skillName: string;
  skillImage: any;
}

export default function SkillBox({ skillName, skillImage }: Props) {
  return (
    <div className={styles.skillBox}>
      <div className={styles.imageContainer}>{skillImage}</div>
      {skillName}
    </div>
  );
}
