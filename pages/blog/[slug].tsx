import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { BsArrowLeftShort } from "react-icons/bs";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { getAllPostIds, getPostData } from "@/utils/getPosts";
import BlogContainer from "@/components/BlogContainer";
import { BlogSEO } from "@/components/SEO";

const components = {};

export default function BlogPost({ frontMatter, source, slug }) {
  return (
    <>
      <BlogSEO
        title={frontMatter.title}
        summary={frontMatter.description}
        date={frontMatter.date}
        image={frontMatter.cover?.image}
        slug={slug}
      />
      <Link href="/blog">
        <a className="styledLink">
          <BsArrowLeftShort />
          Back
        </a>
      </Link>
      <BlogContainer frontMatter={frontMatter}>
        <MDXRemote {...source} components={components} />
      </BlogContainer>
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
  const { content, frontMatter, slug } = await getPostData(
    params.slug as string
  );
  const mdxSource = await serialize(content, {
    scope: frontMatter,
    mdxOptions: {
      rehypePlugins: [
        [rehypeAutolinkHeadings, { behavior: "append" }],
        [rehypePrism, { showLineNumbers: true }],
        rehypeSlug,
      ],
      remarkPlugins: [[remarkToc, { tight: true }]],
    },
  });
  return { props: { source: mdxSource, frontMatter, slug } };
};
