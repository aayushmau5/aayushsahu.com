import { BsArrowRightShort } from "react-icons/bs";

import styles from "../styles/OpenSource.module.css";

interface Project {
  name: string;
  description: string;
  projectLink: string;
  commitsLink: string;
}

const projects: Project[] = [];

export default function OpenSourceWork() {
  return (
    <div className={styles.parentContainer}>
      {projects.map((project, index) => (
        <OpenSourceBox
          key={index}
          name={project.name}
          description={project.description}
          projectLink={project.projectLink}
          commitsLink={project.commitsLink}
        />
      ))}
    </div>
  );
}

function OpenSourceBox({
  name,
  description,
  projectLink,
  commitsLink,
}: Project) {
  return (
    <div className={styles.container}>
      <div className={styles.projectBox}>
        <h4>
          {name}, <em>Contributor</em>
        </h4>
        <p>{description}</p>
        <a
          href={projectLink}
          className="styledLink"
          target="_blank"
          rel="noreferrer"
        >
          <BsArrowRightShort />
          Repository link
        </a>
        <a
          href={commitsLink}
          className="styledLink"
          target="_blank"
          rel="noreferrer"
        >
          <BsArrowRightShort />
          See my commits
        </a>
      </div>
    </div>
  );
}
