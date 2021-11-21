import styles from "../styles/Skills.module.css";

export default function SkillBox({ skillImage, skillName }) {
  return (
    <div className={styles.skillBox}>
      <div className={styles.imageContainer}>{skillImage}</div>
      {skillName}
    </div>
  );
}
