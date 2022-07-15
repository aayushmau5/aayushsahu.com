import { GetStaticProps } from "next";
import Link from "next/link";

import { PageSEO } from "@/components/SEO";
import { stuffList } from "@/utils/getStuffs";

import styles from "@/styles/Stuff.module.css";

interface StuffData {
  slug: string;
  title: string;
  description: string;
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
        <p className={styles.paragraph}>
          Code snippets and random thoughts. This page is basically a big github
          gist from me ;)
        </p>
        <div className={styles.allStuff}>
          {stuffList.map((stuff) => (
            <Link key={stuff.slug} href={`/stuff/${stuff.slug}`}>
              <a className={styles.stuffContainer}>
                <h3>{stuff.title}</h3>
                <p className={styles.description}>{stuff.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      stuffList,
    },
  };
};
