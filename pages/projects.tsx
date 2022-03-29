import Skills from "@/components/React/Project/Skills";
import Projects from "@/components/React/Project/Projects";
import { PageSEO } from "@/components/SEO";

import styles from "@/styles/ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <>
      <PageSEO
        title="Projects | Aayush Kumar Sahu"
        description="Checkout the projects made by me."
      />
      <div className={styles.container}>
        <h1>Projects</h1>
        <p className={styles.paragraph}>Checkout the work I have done 🙂</p>
        <Projects />
        <h2>Skills</h2>
        <p className={styles.paragraph}>
          These are the skills/technologies I feel comfortable with. Though I
          keep experimenting with new/exciting technologies.
        </p>
        <h4>Frontend</h4>
        <Skills show="frontend" />
        <h4>Backend</h4>
        <Skills show="backend" />
        <h4>Tools</h4>
        <Skills show="tools" />
        <h4>Familiar with</h4>
        <Skills show="others" />
      </div>
    </>
  );
}
