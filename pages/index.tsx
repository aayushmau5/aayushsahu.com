import Head from "next/head";
import Image from "next/image";

import Logo from "../public/image.png";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aayush Kumar Sahu - Developer and Explorer</title>
        <meta name="description" content="Aayush Kumar Sahu aka aayushmau5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.heading}>
        <div>
          <h1> Hello 👋 </h1>
          <p>
            My name is{" "}
            <span className={styles.highlight}>Aayush Kumar Sahu</span>, aka,{" "}
            <span className={styles.highlight}>aayushmau5</span>(pronounced:
            aayushmouse).
          </p>
          <p>
            I&apos;m a{" "}
            <span className={styles.highlight}>fullstack web developer</span>{" "}
            based in India.
          </p>
          <p>
            Currently exploring the web. I like to babble about{" "}
            <code>Open-Source</code>, <code>JavaScript/TypeScript</code>,{" "}
            <code>Linux</code>, <code>Vim</code>(<code>vscode</code> works as
            well), <code>compilers</code>, or anything interesting :P
          </p>
        </div>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="logo" className={styles.logo} />
        </div>
      </div>

      <main></main>
    </div>
  );
}
