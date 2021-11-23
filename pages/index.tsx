import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

import { PageSEO } from "../components/SEO";
import Logo from "../public/image.png";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <>
      <PageSEO
        title="Aayush Kumar Sahu - Developer and Explorer"
        description="aayushmau5' personal website"
      />
      <div className={styles.container}>
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
              I like to babble about <code>Open-Source</code>,{" "}
              <code>JavaScript/TypeScript</code>, <code>Linux</code>,{" "}
              <code>Vim</code>(<code>vscode</code> works as well),{" "}
              <code>compilers</code>, or anything interesting :P
            </p>
          </div>
          <div className={styles.logoContainer}>
            <Image src={Logo} alt="logo" className={styles.logo} />
          </div>
        </div>

        <div className={styles.nextStepsContainer}>
          <div className={styles.nextSteps}>
            <p>While you are here, feel free to:</p>
            <Link href="/blog">
              <a className="styledLink">
                <BsArrowRightShort />
                Checkout my blogs
              </a>
            </Link>
            <Link href="/work">
              <a className="styledLink">
                <BsArrowRightShort />
                Checkout my work
              </a>
            </Link>
            <p>And if you liked it:</p>
            <a href="mailto:aayushmau5@gmail.com" className="styledLink">
              <BsArrowRightShort />
              Contact me
            </a>
            <a href="#" className="styledLink">
              <BsArrowRightShort />
              See my resume
            </a>
          </div>
        </div>

        <main></main>
      </div>
    </>
  );
}
