import { BsArrowRightShort } from "react-icons/bs";

import styles from "../styles/Projects.module.css";

export interface Project {
  name: string;
  description: string;
  image: any;
  sourceLink: string;
  demoLink: string;
}

export function ProjectBox({
  name,
  description,
  image,
  sourceLink,
  demoLink,
}: Project) {
  return (
    <div className={styles.projectBoxContainer}>
      <div className={styles.projectBox}>
        <div className={styles.imageContainer}>{image}</div>
        <div className={styles.projectInfoContainer}>
          <h3>{name}</h3>
          <p>{description}</p>
          <a
            href={demoLink}
            className="styledLink"
            target="_blank"
            rel="noreferrer"
          >
            <BsArrowRightShort />
            Demo Link
          </a>
          <a
            href={sourceLink}
            className="styledLink"
            target="_blank"
            rel="noreferrer"
          >
            <BsArrowRightShort />
            Source Link
          </a>
        </div>
      </div>
    </div>
  );
}
