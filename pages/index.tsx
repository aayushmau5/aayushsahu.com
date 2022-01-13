import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

import { PageSEO } from "@/components/SEO";
import Date from "@/components/Date";

import Logo from "@/public/image.png";
import { sortedPostData } from "@/utils/getPosts";

import blogStyles from "@/styles/Blog.module.css";
import styles from "@/styles/Home.module.css";
import getResumeLink from "@/utils/getResumeLink";
import { createRSSFile } from "@/utils/generateRSSFeed";

export default function Index({ firstPost, secondPost, resumeFileNameLink }) {
  return (
    <>
      <PageSEO
        title="Aayush Kumar Sahu - Developer and Explorer"
        description="aayushmau5' personal website"
      />
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <h1>
              {" "}
              Hello <span className={styles.waving}>👋 </span>
            </h1>
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
              <code>Compilers</code>, or anything interesting :P
            </p>
          </div>
          <div className={styles.logoContainer}>
            <Image
              src={Logo}
              placeholder="blur"
              alt="logo"
              className={styles.logo}
            />
          </div>
        </div>

        <div>
          <h3>Recent articles</h3>
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
            <p>And if you liked it:</p>
            <a href="mailto:aayushmau5@gmail.com" className="styledLink">
              <BsArrowRightShort />
              Contact me
            </a>
            <a
              href={`/resume/${resumeFileNameLink}`}
              target="_blank"
              rel="noreferrer"
              className="styledLink"
            >
              <BsArrowRightShort />
              See my resume
            </a>
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

  const resumeFileNameLink = getResumeLink();
  createRSSFile();

  return {
    props: {
      firstPost,
      secondPost,
      resumeFileNameLink,
    },
  };
};
