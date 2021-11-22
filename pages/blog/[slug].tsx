import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { BsArrowLeftShort } from "react-icons/bs";

import { getAllPostIds, getPostData } from "../../utils/getPosts";
import BlogContainer from "../../components/BlogContainer";

export default function BlogPost({ blogData }) {
  return (
    <>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <Link href="/blog">
        <a className="styledLink">
          <BsArrowLeftShort />
          Back
        </a>
      </Link>
      <BlogContainer blogData={blogData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = await getPostData(params.slug as string);
  return {
    props: {
      blogData,
    },
  };
};
