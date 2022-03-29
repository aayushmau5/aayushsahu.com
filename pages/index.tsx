import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

import { PageSEO } from "@/components/SEO";
import Date from "@/components/Date";

import { sortedPostData } from "@/utils/getPosts";

import blogStyles from "@/styles/Blog.module.css";
import styles from "@/styles/Home.module.css";
import { createRSSFile } from "@/utils/generateRSSFeed";

export default function Index({ firstPost, secondPost }) {
  return (
    <>
      <PageSEO
        title="Aayush Kumar Sahu - Developer and Explorer"
        description="aayushmau5' personal website"
      />
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <h2>
              {" "}
              Hi there <span className={styles.waving}>👋 </span>
            </h2>
            <p>
              My name is{" "}
              <span className={styles.highlight}>Aayush Kumar Sahu</span>, aka{" "}
              <span className={styles.highlight}>aayushmau5</span>(pronounced:
              aayushmouse). I&apos;m a fullstack web developer from India. I
              love to talk about{" "}
              <span className={styles.highlight}>Open-Source</span>,{" "}
              <span className={styles.highlight}>JavaScript/TypeScript</span>,{" "}
              <span className={styles.highlight}>Linux</span>,{" "}
              <span className={styles.highlight}>Vim/VSCode</span>,{" "}
              <span className={styles.highlight}>Compilers</span>,{" "}
              <span className={styles.highlight}>Docker</span>, or anything
              interesting :P
            </p>
          </div>
        </div>

        <div>
          <h3>Recent articles ✍🏻</h3>
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
            <p>And if you liked them:</p>
            <a href="mailto:aayushmau5@gmail.com" className="styledLink">
              <BsArrowRightShort />
              Contact me(e-mail)
            </a>
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
