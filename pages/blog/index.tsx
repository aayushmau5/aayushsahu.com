import { useMemo } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";

import SearchBar from "@/components/React/Blog/SearchBar";
import Date from "@/components/Date";
import { PageSEO } from "@/components/SEO";
import { getAllTags, sortedPostData } from "@/utils/getPosts";

import styles from "@/styles/Blog.module.css";
import Tag from "@/components/React/Blog/TagsContainer/Tag";
import TagsContainer from "@/components/React/Blog/TagsContainer";

interface PostData {
  slug: string;
  title: string;
  date: string;
  description?: string;
  readingTime: {
    text: string;
  };
  tags: string[];
}

interface Props {
  postsData: PostData[];
  tags: string[];
}

export default function Blog({ postsData, tags }: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  const filteredBlogs = useMemo(
    () =>
      postsData
        .filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
        .filter((post) => {
          if (selectedTag) {
            return post.tags?.includes(selectedTag.toLowerCase());
          }
          return post;
        }),
    [postsData, selectedTag, searchValue]
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
          I write about cool technology, or something I have learned recently.
        </p>
        <p className={styles.noOfBlogs}>
          So far, I have written {postsData.length} articles.
        </p>
        <SearchBar value={searchValue} onChange={setSearchValue} />
        <TagsContainer>
          <Tag
            isSelected={selectedTag === ""}
            value={"All"}
            onClick={() => setSelectedTag("")}
          />
          {tags.map((tag, index) => (
            <Tag
              isSelected={selectedTag === tag}
              key={index}
              value={tag}
              onClick={(tag: string) => setSelectedTag(tag)}
            />
          ))}
        </TagsContainer>
        {searchValue === "" ? <h3>Recent blogs</h3> : <h3>Search result</h3>}
        {filteredBlogs.length === 0 ? <h3>No blogs found</h3> : null}
        <div className={styles.blogsContainer}>
          {filteredBlogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <a className={styles.blogContainer}>
                <p className={styles.date}>
                  <Date dateString={post.date} />
                </p>
                <h3>{post.title}</h3>
                <p className={styles.readingTime}>{post.readingTime.text}</p>
                <p className={styles.additionalInfo}></p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData = sortedPostData;
  const tags = getAllTags();

  return {
    props: {
      postsData,
      tags,
    },
  };
};
