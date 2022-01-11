import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { BsArrowLeftShort } from "react-icons/bs";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

import { getAllPostIds, getPostData } from "@/utils/getPosts";
import BlogContainer from "@/components/React/Blog/BlogContainer";
import { BlogSEO } from "@/components/SEO";
import Pre from "@/components/MDX/Pre";
import Blockquote from "@/components/MDX/Blockquote";
import HiddenExpand from "@/components/MDX/HiddenExpand";
import StyledAnchor from "@/components/MDX/StyledAnchor";
import SeparatorSvg from "@/components/React/SeparatorSvg";
import NextPrevArticles from "@/components/React/Blog/NextPrevArticles";
import { generateToC } from "@/utils/generateToC";

const components = {
  pre: ({ className, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    if (match !== null) {
      const languageType = match[1].toUpperCase();
      return (
        <Pre languageType={languageType} className={className} {...props} />
      );
    }
    return <Pre className={className} {...props} />;
  },
  blockquote: (props) => <Blockquote {...props} />,
  a: (props) => <StyledAnchor {...props} />,
  hr: (props) => <SeparatorSvg {...props} stroke="#569cd6" />,
  HiddenExpand,
};

export default function BlogPost({
  frontMatter,
  source,
  slug,
  tableOfContents,
  recommendedPostList,
}) {
  return (
    <>
      <BlogSEO
        title={frontMatter.title}
        summary={frontMatter.description}
        date={frontMatter.date}
        slug={slug}
      />
      <Link href="/blog">
        <a className="styledLink">
          <BsArrowLeftShort />
          Back
        </a>
      </Link>
      <BlogContainer
        frontMatter={frontMatter}
        tableOfContents={tableOfContents}
      >
        <MDXRemote {...source} components={components} />
      </BlogContainer>
      <NextPrevArticles recommendedPostList={recommendedPostList} />
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
  const { content, frontMatter, slug, recommendedPostList } = await getPostData(
    params.slug as string
  );

  const mdxSource = await serialize(content, {
    scope: frontMatter,
    mdxOptions: {
      rehypePlugins: [
        [rehypePrism, { showLineNumbers: true }],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "append" }],
      ],
      remarkPlugins: [remarkGfm],
    },
  });

  let tableOfContents: string = null;

  if (typeof frontMatter.showToc === "undefined") {
    tableOfContents = await generateToC(content);
  } else {
    if (frontMatter.showToc) {
      tableOfContents = await generateToC(content);
    }
  }

  return {
    props: {
      source: mdxSource,
      frontMatter,
      slug,
      tableOfContents,
      recommendedPostList,
    },
  };
};
