import Head from "next/head";

import styles from "../styles/Works.module.css";
import Skills from "../components/Skills";

export default function Works() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Works | Aayush Kumar Sahu</title>
      </Head>
      <h1>Works</h1>
      <p>Checkout the works I have done.</p>
      <h2>Skills</h2>
      <p>Here&apos;s the list of skills that I have.</p>
      <div>
        <h4>Frontend</h4>
        <Skills show="frontend" />
        <h4>Backend</h4>
        <Skills show="backend" />
        <h4>Tools</h4>
        <Skills show="tools" />
        <h4>Familiar with</h4>
        <Skills show="others" />
      </div>
      <h2>Projects</h2>
      <p>Here&apos;s the list of projects that I have done.</p>
    </div>
  );
}
