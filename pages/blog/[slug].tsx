import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { BsArrowLeftShort } from "react-icons/bs";

import { getAllPostIds, getPostData } from "@/utils/getPosts";
import BlogContainer from "@/components/BlogContainer";
import { BlogSEO } from "@/components/SEO";

export default function BlogPost({ blogData, slug }) {
  return (
    <>
      <BlogSEO
        title={blogData.title}
        summary={blogData.description}
        date={blogData.date}
        image={blogData.cover?.image}
        slug={slug}
      />
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
      slug: params.slug,
    },
  };
};
