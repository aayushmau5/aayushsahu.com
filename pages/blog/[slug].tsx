import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { BsArrowLeftShort } from "react-icons/bs";

import Date from "../../components/Date";
import { getAllPostIds, getPostData } from "../../utils/getPosts";

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
      <article>
        <p>
          <Date dateString={blogData.date} />
        </p>
        <h1>{blogData.title}</h1>
        <p>by aayushmau5</p>
        <hr />
      </article>
      <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
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
