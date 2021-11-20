import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aayush Kumar Sahu</title>
        <meta name="description" content="Aayush Kumar Sahu aka aayushmau5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Hello, I&apos;m Aayush 👋 </h1>

      <main className={styles.main}>
        <p>
          Hello, My name is Aayush Kumar Sahu, aka, aayushmau5(pronounced:
          aayushmouse, aayush-mow-five, aayushmouse-five :P).
        </p>
        <p>I love Open-Source.</p>
        <p>
          Currently exploring the web. I like to babble about Open-Source,
          Javascript, Linux, Vim(vscode works as well), compilers, or anything
          interesting :P
        </p>
        <div>
          Feel free to reach out to me @:
          <ul>
            <li>Email: aayushmau5[at]gmail[dot]com</li>
            <li>Twitter: @aayushmau5</li>
            <li>Telegram: @aayushmau5</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
