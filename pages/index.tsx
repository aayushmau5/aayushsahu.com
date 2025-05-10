import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

import { PageSEO } from "@/components/SEO";
import Date from "@/components/Date";

import blogStyles from "@/styles/Blog.module.css";
import styles from "@/styles/Home.module.css";
import { createRSSFile } from "@/utils/generateRSSFeed";
import { getSortedPosts } from "@/utils/postHelpers";

export default function Index({ firstPost, secondPost }) {
  return (
    <>
      <PageSEO
        title="Aayush Kumar Sahu - Developer and Explorer"
        description="aayushmau5' personal website"
      />
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.circleContainer}>
            <div
              className={styles.circle}
              style={{ background: "var(--theme-one)" }}
            />
            <div
              className={styles.circle}
              style={{ background: "var(--theme-two)" }}
            />
            <div
              className={styles.circle}
              style={{ background: "var(--theme-three)" }}
            />
            <div
              className={styles.circle}
              style={{ background: "var(--theme-four)" }}
            />
          </div>
          <div>
            <h2>
              {" "}
              Hi there <span className={styles.waving}>👋 </span>
            </h2>
            <p>
              I&apos;m <span className={styles.highlight}>Aayush Sahu</span>, a
              Software Engineer. Working at{" "}
              <span className={styles.highlight}>
                <a
                  href="https://tractable.ai/"
                  rel="noreferrer"
                  target="_blank"
                >
                  tractable
                </a>
              </span>
              .
            </p>
            <p>
              I&apos;m an Open Sourcerer <span title="Magic Wand">🪄</span>, and
              have contributed to many open source projects. Apart from this, I
              like to explore various technologies, and write about my
              learnings.
            </p>
            <p>
              I love to talk about{" "}
              <span className={styles.highlight}>open source</span>,{" "}
              <span className={styles.highlight}>programming languages</span>,{" "}
              <span className={styles.highlight}>linux</span>,{" "}
              <span className={styles.highlight}>vim/vscode</span>,{" "}
              <span className={styles.highlight}>compilers</span>,{" "}
              <span className={styles.highlight}>containers</span>, or anything
              interesting :P
            </p>
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Latest Posts
            </div>
            <Link href={"/blog"}>
              <a className={styles.viewAll}>View all</a>
            </Link>
          </div>
          <div className={blogStyles.blogsContainer}>
            <Link key={firstPost.url} href={firstPost.url}>
              <a className={blogStyles.blogContainer}>
                <p className={blogStyles.date}>
                  <Date dateString={firstPost.date} />
                </p>
                <h3>{firstPost.title}</h3>
              </a>
            </Link>
            <Link key={secondPost.url} href={secondPost.url}>
              <a className={blogStyles.blogContainer}>
                <p className={blogStyles.date}>
                  <Date dateString={secondPost.date} />
                </p>
                <h3>{secondPost.title}</h3>
              </a>
            </Link>
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
            <Link href="/projects">
              <a className="styledLink">
                <BsArrowRightShort />
                Checkout my projects
              </a>
            </Link>
            <Link href="/about">
              <a className="styledLink">
                <BsArrowRightShort />
                Know more about me
              </a>
            </Link>
            <Link href="/resume">
              <a target="_blank" rel="noreferrer" className="styledLink">
                <BsArrowRightShort />
                See my resume
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const postsData = getSortedPosts();
  const firstPost = postsData[0];
  const secondPost = postsData[1];

  createRSSFile();

  return {
    props: {
      firstPost: {
        title: firstPost.title,
        date: firstPost.date,
        url: firstPost.url,
      },
      secondPost: {
        title: secondPost.title,
        date: secondPost.date,
        url: secondPost.url,
      },
    },
  };
};
