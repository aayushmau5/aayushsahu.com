import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

import { PageSEO } from "@/components/SEO";
import Date from "@/components/Date";

import blogStyles from "@/styles/Blog.module.css";
import styles from "@/styles/Home.module.css";
import { createRSSFile } from "@/utils/generateRSSFeed";
import { getSortedPosts } from "@/utils/postHelpers";

export default function Index({ posts }) {
  return (
    <>
      <PageSEO
        title="Aayush Kumar Sahu - Developer and Explorer"
        description="aayushmau5' personal website"
      />

      <p
        style={{
          fontSize: "1rem",
          fontStyle: "italic",
          borderLeft: "5px solid var(--theme-three)",
          padding: "5px 10px",
        }}
      >
        This too shall pass.
      </p>
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
            <p>
              {" "}
              Hi there <span className={styles.waving}>👋 </span>
            </p>
            <p>
              I&apos;m <span className={styles.highlight}>Aayush Sahu</span>.
              Currently working as a Software Engineer at{" "}
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
              Previously, I worked at{" "}
              <span className={styles.highlight}>
                <a href="https://beatoven.ai/" rel="noreferrer" target="_blank">
                  beatoven.ai
                </a>
              </span>{" "}
              as a full-stack developer. Taking the startup from ground one to
              the sky.
            </p>
            <p>
              Apart from that, I&apos;m an Open Sourcerer{" "}
              <span title="Magic Wand">🪄</span>. I like to explore various
              technologies, and write about my learnings. I love to talk about{" "}
              <span className={styles.highlight}>open source</span>,{" "}
              <span className={styles.highlight}>elixir</span>,{" "}
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
            {posts.map((post) => (
              <Link key={post.url} href={post.url}>
                <a className={blogStyles.blogContainer}>
                  <h3>{post.title}</h3>
                  <p className={blogStyles.date} style={{ margin: "5px 0" }}>
                    {post.description}
                  </p>
                  <p className={blogStyles.date}>
                    <Date dateString={post.date} />
                  </p>
                </a>
              </Link>
            ))}
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
  const posts = postsData.map((post) => ({
    title: post.title,
    date: post.date,
    url: post.url,
    description: post.description,
  }));

  createRSSFile();

  return {
    props: {
      posts: posts.slice(0, 4),
    },
  };
};
