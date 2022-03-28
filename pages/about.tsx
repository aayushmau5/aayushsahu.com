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
          <span className={styles.highlight}>fullstack web developer</span>, and
          an <span className={styles.highlight}>Open-Source enthusiast</span>.
          My interest includes exploring various technologies such as
          Docker(DevOps), Low-level programming, Compilers, etc. Currently, I'm
          an undergrad student studying at JIIT, Noida.
        </p>
        <p>
          I did Google Summer of Code(GSoC) 2021 at Postman, and I'm currently a
          maintainer at{" "}
          <a
            className={styles.link}
            href="https://www.asyncapi.com/"
            target="_blank"
          >
            AsyncAPI
          </a>{" "}
          where I maintain the{" "}
          <a href="" target="_blank" className={styles.link}>
            diff library
          </a>
          . Reach out to me through the given social links 👇
        </p>
      </div>
    </>
  );
}
