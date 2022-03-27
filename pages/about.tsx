import Image from "next/image";

import { PageSEO } from "@/components/SEO";

import Logo from "@/public/image.png";

import styles from "@/styles/Home.module.css";

export default function Index() {
  return (
    <>
      <PageSEO
        title="About | Aayush Kumar Sahu"
        description="Know more about me."
      />
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.logoContainer}>
          <Image
            src={Logo}
            placeholder="blur"
            alt="logo"
            className={styles.logo}
          />
        </div>
        <p>
          Hey! I&apos;m a{" "}
          <span className={styles.highlight}>fullstack web developer</span>.
        </p>
      </div>
    </>
  );
}
