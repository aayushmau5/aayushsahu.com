import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import { getSortedPostsData } from "@/utils/getPosts";
import Date from "@/components/Date";
import styles from "@/styles/Blog.module.css";
import { PageSEO } from "@/components/SEO";

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
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredBlogs = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <PageSEO
        title="Blog | Aayush Kumar Sahu"
        description="Checkout the blogs written by me"
      />
      <div className={styles.container}>
        <h1>Blog</h1>
        <p className={styles.noOfBlogs}>
          So far, I have written {postsData.length} articles.
        </p>
        <SearchBar value={searchValue} onChange={setSearchValue} />
        {searchValue === "" ? <h3>Recent blogs</h3> : <h3>Search result</h3>}
        {filteredBlogs.length === 0 ? <h3>No blogs found</h3> : null}
        {filteredBlogs.map((post) => (
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
    </>
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
