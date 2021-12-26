import styles from "@/styles/ToC.module.css";

interface Element {
  content: string;
  headingId: string;
  type: string;
}

interface Props {
  elements: Element[];
}

export default function ToC({ elements = [] }: Props) {
  const parentElementType = elements[0]?.type;

  return (
    <details className={styles.details}>
      <summary className={styles.summary}>Table of Contents</summary>
      <ul className={styles.list}>
        {elements
          .filter((element) => element.type === parentElementType)
          .map((element, index) => (
            <li key={index}>
              <a href={`#${element.headingId}`} className={styles.link}>
                {element.content}
              </a>
            </li>
          ))}
      </ul>
    </details>
  );
}
