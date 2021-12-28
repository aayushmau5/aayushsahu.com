import Skills from "@/components/React/Project/Skills";
import Projects from "@/components/React/Project/Projects";
import { PageSEO } from "@/components/SEO";

import styles from "@/styles/ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <>
      <PageSEO
        title="Projects | Aayush Kumar Sahu"
        description="Checkout the projects made by me"
      />
      <div className={styles.container}>
        <h1>Projects</h1>
        <p>Checkout the work I have done.</p>
        <h2>Skills</h2>
        <p>Here&apos;s the list of skills that I have.</p>
        <h4>Frontend</h4>
        <Skills show="frontend" />
        <h4>Backend</h4>
        <Skills show="backend" />
        <h4>Tools</h4>
        <Skills show="tools" />
        <h4>Familiar with</h4>
        <Skills show="others" />
        <h2>All my projects</h2>
        <p>Here&apos;s the list of projects that I have made.</p>
        <Projects />
      </div>
    </>
  );
}
