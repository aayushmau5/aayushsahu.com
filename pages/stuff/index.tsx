import { GetStaticProps } from "next";
import Link from "next/link";

import { PageSEO } from "@/components/SEO";
import { sortedPostData } from "@/utils/getPosts";

import styles from "@/styles/Blog.module.css";

interface StuffData {
  slug: string;
  title: string;
  description?: string;
}

interface Props {
  stuffList: StuffData[];
}

export default function StuffIndex({ stuffList }: Props) {
  return (
    <>
      <PageSEO
        title="Stuff | Aayush Kumar Sahu"
        description="Code snippets and random thoughts"
      />
      <div className={styles.container}>
        <h1>Stuff</h1>
        <p className={styles.noOfBlogs}>
          Code snippets and random thoughts. This page is basically github gist
          for me ;)
        </p>
        <div className={styles.blogsContainer}>
          {stuffList.map((stuff) => (
            <Link key={stuff.slug} href={`/stuff/${stuff.slug}`}>
              <a className={styles.blogContainer}>
                <h3>{stuff.title}</h3>
                {stuff.description ? (
                  <p className={styles.additionalInfo}>{stuff.description}</p>
                ) : null}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const stuffList = sortedPostData;

  return {
    props: {
      stuffList,
    },
  };
};
