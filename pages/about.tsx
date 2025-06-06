import Image from "next/image";
import Link from "next/link";

import { PageSEO } from "@/components/SEO";

import Megu from "@/public/megu.jpeg";
import Desktop from "@/public/desktop.png";
import Keyboard from "@/public/keyboard.png";
import Editor from "@/public/editor.png";

import styles from "@/styles/Home.module.css";

export default function About() {
  return (
    <>
      <PageSEO
        title="About | Aayush Kumar Sahu"
        description="Get to know more about Aayush"
      />
      <div className={styles.container}>
        <h1>About</h1>
        <p>
          Welcome to my smol corner on the internet where I write blogs, and
          showoff my projects :)
        </p>
        <p>
          I&apos;m a{" "}
          <span className={styles.highlight}>fullstack web developer</span>, and
          an <span className={styles.highlight}>Open Sourcerer</span>. My
          interests include exploring various technologies such as Web, DevOps,
          Low-level programming, Compilers, etc. I did Google Summer of
          Code(GSoC) 2021 at Postman, and I&apos;m currently a maintainer at{" "}
          <a
            className={styles.link}
            href="https://www.asyncapi.com/"
            target="_blank"
            rel="noreferrer"
          >
            AsyncAPI
          </a>{" "}
          where I maintain the{" "}
          <a
            href="https://github.com/asyncapi/diff"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            diff library
          </a>
          . Currently, I&apos;m working as a Software Engineer at{" "}
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href="https://tractable.ai/"
          >
            tractable
          </a>
          .
        </p>
        <p>
          This site has no ads, no paywalls, and <em>no analytics</em>.
        </p>
        <h3>What am I doing these days</h3>
        <ul className={styles.ul}>
          <li>Playing with my cat</li>
          <li>Working</li>
          <li>Learning about different technologies</li>
          <li>Reading books</li>
          <li>Doing side projects ;)</li>
        </ul>
        <h3>Random Facts</h3>

        <p>
          Checkout the{" "}
          <Link href="/uses">
            <a className={styles.link}>list of things I use</a>
          </Link>
          .
        </p>

        <h4>Meet Megu</h4>
        <p className={styles.smallParagraph}>
          I have a cat. Her name is Megatron(don&apos;t ask why). We call her
          Megu.
        </p>
        <Image
          src={Megu}
          placeholder="blur"
          alt="My cat megatron"
          className={styles.logo}
        />

        <h4>Desktop</h4>
        <p className={styles.smallParagraph}>
          This is what my desktop currently looks like. I&apos;m using Pop-OS as
          my daily driver(I distro hop a lot), and VSCode. I left Vim. Too much
          to configure :(
        </p>
        <Image
          src={Desktop}
          placeholder="blur"
          alt="My desktop"
          className={styles.logo}
        />
        <h4>Editor</h4>
        <p className={styles.smallParagraph}>
          My current editor is VSCode. Here&apos;s how it looks right now.
          Editor font: Julia Mono, Terminal Font: Zed Mono, and Vitesse Dark
          theme.
        </p>
        <Image
          src={Editor}
          placeholder="blur"
          alt="My editor"
          className={styles.logo}
        />
        <h4>Keyboard</h4>
        <p className={styles.smallParagraph}>
          This is my current keyboard. Keychron K2-V2, with red switches.
        </p>
        <Image
          src={Keyboard}
          placeholder="blur"
          alt="My current keyboard"
          className={styles.logo}
        />
        <p className={styles.smallParagraph}>Look at this big boi!</p>
        <h4>Tools</h4>
        <p className={styles.smallParagraph}>
          I use VSCode, with vim extension as my IDE. Kitty as my terminal. I
          use either Fira Code, Julia Mono, Calling Code or Zed Mono as my font.
          I love the{" "}
          <a
            className={styles.link}
            href="https://github.com/antfu/vscode-theme-vitesse"
            target="_blank"
            rel="noreferrer"
          >
            Vitesse Dark theme
          </a>{" "}
          by Anthony Fu. Notion, Kitty(terminal), and Firefox.
        </p>
      </div>
      <p className={styles.smallParagraph}>
        You can reach out to me through the links below :)
      </p>
    </>
  );
}
