import { useEffect, useMemo, useState, useCallback } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";

import { Post } from "contentlayer/generated";

import SearchBar from "@/components/React/Blog/SearchBar";
import Date from "@/components/Date";
import { PageSEO } from "@/components/SEO";
import { getAllTags, getSortedPosts } from "@/utils/postHelpers";
import CategoryToggle, {
  BlogCategory,
} from "@/components/React/Blog/CategoryToggle";

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
  c?: string; // category
}

export default function Blog({ postsData, tags }: Props) {
  const router = useRouter();
  const { q, t, c } = router.query as unknown as QueryParams;
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<BlogCategory>("tech");

  const updateUrl = useCallback(
    (category: BlogCategory, tag: string) => {
      const query: QueryParams = {};
      if (category !== "tech") query.c = category;
      if (tag) query.t = tag;

      router.replace(
        {
          pathname: "/blog",
          query: query as ParsedUrlQueryInput,
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  const handleCategoryChange = useCallback(
    (category: BlogCategory) => {
      setSelectedCategory(category);
      // Clear selected tag when switching to life category
      const newTag = category === "life-opinions-misc" ? "" : selectedTag;
      if (category === "life-opinions-misc") {
        setSelectedTag("");
      }
      updateUrl(category, newTag);
    },
    [selectedTag, updateUrl]
  );

  const handleTagChange = useCallback(
    (tag: string) => {
      setSelectedTag(tag);
      updateUrl(selectedCategory, tag);
    },
    [selectedCategory, updateUrl]
  );

  // Filter out 'life' tag from the tags list for display
  const displayTags = useMemo(() => {
    return tags.filter((tag) => tag !== "life");
  }, [tags]);

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
        })
        .filter((post) => {
          if (selectedCategory === "life-opinions-misc") {
            return (
              post.tags?.includes("life") ||
              post.tags?.includes("misc") ||
              post.tags?.includes("opinions")
            );
          } else if (selectedCategory === "tech") {
            // Tech blogs are those that don't have the "life" tag
            return (
              !post.tags?.includes("life") &&
              !post.tags?.includes("misc") &&
              !post.tags?.includes("opinions")
            );
          }
          return true;
        }),
    [postsData, selectedTag, searchValue, selectedCategory]
  );

  useEffect(() => {
    if (q) setSearchValue(q);
    if (t) setSelectedTag(t);
    if (c && (c === "tech" || c === "life-opinions-misc")) {
      setSelectedCategory(c as BlogCategory);
      // Clear selected tag when switching to life category
      if (c === "life-opinions-misc") {
        setSelectedTag("");
      }
    }
  }, [q, t, c]);

  return (
    <>
      <PageSEO
        title="Blog | Aayush Kumar Sahu"
        description="Checkout my blogs."
      />
      <div className={styles.container}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <p className={styles.noOfBlogs}>
          I write about something cool I have learned recently, or some cool
          technologies, or just about life in general.
        </p>
        <p className={styles.noOfBlogs}>
          So far, I have written {postsData.length} blogs.
        </p>
        <SearchBar value={searchValue} onChange={setSearchValue} />
        <CategoryToggle
          activeCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        {selectedCategory === "tech" && (
          <TagsContainer>
            <Tag
              isSelected={selectedTag === ""}
              value={"All"}
              onClick={() => handleTagChange("")}
            />
            {displayTags.map((tag, index) => (
              <Tag
                isSelected={selectedTag === tag}
                key={index}
                value={tag}
                onClick={(tag: string) => handleTagChange(tag)}
              />
            ))}
          </TagsContainer>
        )}
        {searchValue !== "" && <h3>Search result</h3>}
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
