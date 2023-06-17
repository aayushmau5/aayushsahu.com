import Link from "next/link";

import { PageSEO } from "@/components/SEO";
import Date from "@/components/Date";
import Badge from "@/components/React/Badge";

import { sortedPostData } from "@/utils/getPosts";

import blogStyles from "@/styles/Blog.module.css";
import styles from "@/styles/Home.module.css";
import { createRSSFile } from "@/utils/generateRSSFeed";
import { BsArrowRightShort } from "react-icons/bs";
import MagicWand from "@/components/Wand";

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
            <div className={styles.circle} style={{ background: "#21daa2" }} />
            <div className={styles.circle} style={{ background: "#43dce5" }} />
            <div className={styles.circle} style={{ background: "#36c3ef" }} />
            <div className={styles.circle} style={{ background: "#4a5ae9" }} />
          </div>
          <Badge status="Current status: Just chilling and writing code" />
          <div>
            <h2>
              {" "}
              Hi there <span className={styles.waving}>👋 </span>
            </h2>
            <p>
              I&apos;m <span className={styles.highlight}>Aayush Sahu</span>, a
              fullstack web developer. Working at{" "}
              <span className={styles.highlight}>
                <a href="https://beatoven.ai/" rel="noreferrer" target="_blank">
                  beatoven.ai
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
            <Link key={firstPost.slug} href={`/blog/${firstPost.slug}`}>
              <a className={blogStyles.blogContainer}>
                <p className={blogStyles.date}>
                  <Date dateString={firstPost.date} />
                </p>
                <h3>{firstPost.title}</h3>
                <p className={blogStyles.readingTime}>
                  {firstPost.readingTime.text}
                </p>
                <p className={blogStyles.additionalInfo}></p>
              </a>
            </Link>
            <Link key={secondPost.slug} href={`/blog/${secondPost.slug}`}>
              <a className={blogStyles.blogContainer}>
                <p className={blogStyles.date}>
                  <Date dateString={secondPost.date} />
                </p>
                <h3>{secondPost.title}</h3>
                <p className={blogStyles.readingTime}>
                  {secondPost.readingTime.text}
                </p>
                <p className={blogStyles.additionalInfo}></p>
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
  const postsData = sortedPostData;
  const firstPost = postsData[0];
  const secondPost = postsData[1];

  createRSSFile();

  return {
    props: {
      firstPost,
      secondPost,
    },
  };
};
