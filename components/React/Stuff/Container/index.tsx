import styles from "./style.module.css";

export default function StuffContainer({ children, frontMatter }) {
  return (
    <div className={styles.container}>
      <ShowFrontMatter frontMatter={frontMatter} />
      <article>{children}</article>
    </div>
  );
}

function ShowFrontMatter({ frontMatter }) {
  return (
    <div className={styles.frontMatterContainer}>
      <h2 className={styles.title}>{frontMatter.title}</h2>
      <p className={styles.description}>{frontMatter.description}</p>
    </div>
  );
}
