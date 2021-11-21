import Head from "next/head";

import styles from "../styles/Work.module.css";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work | Aayush Kumar Sahu</title>
        <meta
          name="description"
          content="Checkout the work done by aayushmau5"
        />
      </Head>
      <h1>Work</h1>
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
      <h2>Projects</h2>
      <p>Here&apos;s the list of projects that I have made.</p>
      <Projects />
      {/* <h2>Open Source contributions</h2>
      <p>
        I like to contribute to open source projects a lot. Here are the open
        source contributions I have made.
      </p> */}
    </div>
  );
}
