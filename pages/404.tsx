import Link from "next/link";
import Head from "next/head";
import { BsArrowLeftShort } from "react-icons/bs";

import styles from "../styles/404.module.css";

export default function FourOhFourPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page not found | Aayush Kumar Sahu</title>
      </Head>
      <h1>Oops, looks like you have landed on a wrong page.</h1>
      <Link href="/">
        <a>
          <BsArrowLeftShort />
          Go back to home
        </a>
      </Link>
    </div>
  );
}