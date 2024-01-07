import { useEffect, useMemo, useState } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

import { Post } from "contentlayer/generated";

import SearchBar from "@/components/React/Blog/SearchBar";
import Date from "@/components/Date";
import { PageSEO } from "@/components/SEO";
import { getAllTags, getSortedPosts } from "@/utils/postHelpers";

import styles from "@/styles/Blog.module.css";
import Tag from "@/components/React/Blog/TagsContainer/Tag";
import TagsContainer from "@/components/React/Blog/TagsContainer";

interface Props {
  postsData: Post[];
  tags: string[];
}

interface QueryParams {
  q?: string; // query
  t?: string; // tag
}

export default function Blog({ postsData, tags }: Props) {
  const router = useRouter();
  const { q, t } = router.query as unknown as QueryParams;
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  // function changeSearchValue(search: string) {
  //   setSearchValue(search);

  //   let query: QueryParams = {};
  //   if (search.length !== 0) query.q = search;
  //   if (selectedTag.length !== 0) query.t = selectedTag;

  //   router.push(
  //     {
  //       pathname: "/blog",
  //       query: query as ParsedUrlQueryInput,
  //     },
  //     undefined,
  //     { shallow: true }
  //   );
  // }

  // function changeSelectedTag(tag: string) {
  //   setSelectedTag(tag);

  //   let query: QueryParams = {};
  //   if (searchValue.length !== 0) query.q = searchValue;
  //   if (tag.length !== 0) query.t = tag;

  //   router.push(
  //     {
  //       pathname: "/blog",
  //       query: query as ParsedUrlQueryInput,
  //     },
  //     undefined,
  //     { shallow: true }
  //   );
  // }

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

  useEffect(() => {
    if (q) setSearchValue(q);
    if (t) setSelectedTag(t);
  }, [q, t]);

  return (
    <>
      <PageSEO
        title="Blog | Aayush Kumar Sahu"
        description="Checkout my blogs."
      />
      <div className={styles.container}>
        <h1>Blog</h1>
        <p className={styles.noOfBlogs}>
          I write about something cool I have learned recently, or some cool
          technologies, or just about life in general.
        </p>
        <p className={styles.noOfBlogs}>
          So far, I have written {postsData.length} blogs.
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
            <Link key={post.url} href={post.url}>
              <a className={styles.blogContainer}>
                <p className={styles.date}>
                  <Date dateString={post.date} />
                </p>
                <h3>{post.title}</h3>
                <p className={styles.readingTime}>{post.readingTime}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const sortedPostData = getSortedPosts();
  const tags = getAllTags(sortedPostData);

  return {
    props: {
      postsData: sortedPostData.map((p) => ({
        title: p.title,
        url: p.url,
        date: p.date,
        readingTime: p.readingTime,
        tags: p.tags ? p.tags : null,
      })),
      tags,
    },
  };
};
