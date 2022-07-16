import Image from "next/image";

import { PageSEO } from "@/components/SEO";

import ProfileImage from "@/public/profile.jpg";
import Desktop from "@/public/desktop.png";
import Keyboard from "@/public/keyboard.png";

import styles from "@/styles/Home.module.css";
import Timeline from "@/components/React/Timeline";

export default function Index() {
  return (
    <>
      <PageSEO
        title="About | Aayush Kumar Sahu"
        description="Get to know more about Aayush"
      />
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.logoContainer}>
          <Image
            src={ProfileImage}
            placeholder="blur"
            alt="Me"
            className={styles.logo}
          />
        </div>
        <p className={styles.imageDescription}>
          The only decent picture I have of me.
        </p>
        <p>
          Hey! I&apos;m a{" "}
          <span className={styles.highlight}>fullstack web developer</span>, and
          an <span className={styles.highlight}>Open-Source enthusiast</span>.
          My interest includes exploring various technologies such as
          Docker(DevOps), Low-level programming, Compilers, etc. Currently,
          I&apos;m an undergrad student studying at JIIT, Noida. I did Google
          Summer of Code(GSoC) 2021 at Postman, and I&apos;m currently a
          maintainer at{" "}
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
          .
        </p>
        <p>
          Welcome to my smol corner on the internet where I write blogs, and
          showoff my projects :)
        </p>
        <p>
          This site has no creepy ads, no paywalls, and <em>no analytics</em>. I
          like write blogs to share with other folks, and hopefully connect with
          a few people.
        </p>
        <h3>What am I doing these days</h3>
        <ul className={styles.ul}>
          <li>
            Working as a FullStack intern at{" "}
            <a
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              href="https://beatoven.ai/"
            >
              Beatoven.ai
            </a>
          </li>
          <li>Exploring Elixir & Phoenix framework</li>
          <li>
            <a
              href="https://github.com/aayushmau5"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              Contributing
            </a>{" "}
            to ✨Open-Source✨
          </li>
        </ul>
        <h3>Random</h3>
        <p>Just some random stuff.</p>
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
        <h4>Keyboard</h4>
        <p className={styles.smallParagraph}>
          This is my current keyboard. Keychron K2-V2, with red switches. I love
          it! I have been eyeing NuPhy Air 65 as well, but they don&asop;t
          current ship in India :(
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
          use either `Fira Code` or `Julia Mono` as my font. I love the{" "}
          <a
            className={styles.link}
            href="https://github.com/antfu/vscode-theme-vitesse"
            target="_blank"
            rel="noreferrer"
          >
            Vitesse Dark theme
          </a>{" "}
          by Anthony Fu. I use Notion as my primary note taking/todo list app.
        </p>
        <h3>Timeline</h3>
        <p>Some highlights of my life.</p>
        <Timeline />
      </div>
    </>
  );
}
