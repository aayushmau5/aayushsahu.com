import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aayush</title>
        <meta name="description" content="Aayush Kumar Sahu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Something coming soon ;)</main>
    </div>
  );
}
