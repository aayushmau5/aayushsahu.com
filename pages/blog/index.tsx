import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import SearchBar from "../../components/SearchBar";
import { getSortedPostsData } from "../../utils/getPosts";
import Date from "../../components/Date";
import styles from "../../styles/Blog.module.css";

interface PostData {
  slug: string;
  title: string;
  date: string;
  description?: string;
  readingTime: {
    text: string;
  };
}

interface Props {
  postsData: PostData[];
}

export default function Blog({ postsData }: Props) {
  return (
    <div>
      <Head>
        <title>Blog | Aayush Kumar Sahu</title>
        <meta
          name="description"
          content="Checkout the blogs written by aayushmau5"
        />
      </Head>
      <h1>Blog</h1>
      <SearchBar />
      <h3>Recent blogs</h3>
      {postsData.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <a className={styles.blogContainer}>
            <h3>{post.title}</h3>
            <p className={styles.additionalInfo}>
              <span>
                <Date dateString={post.date} />
              </span>
              {" · "}
              <span>{post.readingTime.text}</span>
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getSortedPostsData();

  return {
    props: {
      postsData,
    },
  };
};
