import { GetStaticProps, GetStaticPaths } from "next";

import { type Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";

import {
  generateToC,
  getNextPrevArticles,
  getPublishedPosts,
  getSortedPosts,
} from "@/utils/postHelpers";
import BlogContainer from "@/components/React/Blog/BlogContainer";
import { BlogSEO } from "@/components/SEO";
import Pre from "@/components/MDX/Pre";
import Blockquote from "@/components/MDX/Blockquote";
import HiddenExpand from "@/components/MDX/HiddenExpand";
import StyledAnchor from "@/components/MDX/StyledAnchor";
import CustomOl from "@/components/MDX/Lists/ol";
import CustomUl from "@/components/MDX/Lists/ul";
import Callout from "@/components/MDX/Callout";
import BasicCard from "@/components/MDX/Card/BasicCard";
import CardWithTitle from "@/components/MDX/Card/CardWithTitle";
import CodeBlock from "@/components/MDX/Codeblock";
import CustomCode from "@/components/MDX/Code";
import SeparatorSvg from "@/components/React/SeparatorSvg";
import NextPrevArticles from "@/components/React/Blog/NextPrevArticles";

const components: MDXComponents = {
  pre: (props) => <Pre {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  a: (props) => <StyledAnchor {...props} />,
  hr: (props) => <SeparatorSvg {...props} />,
  ol: (props) => <CustomOl {...props} />,
  ul: (props) => <CustomUl {...props} />,
  code: (props) => <CodeBlock {...props} />,
  HiddenExpand,
  Callout,
  BasicCard,
  CardWithTitle,
  CustomCode,
};

export default function BlogPost({
  post,
  recommendedPostList,
  toc,
}: {
  post: Post;
  recommendedPostList: { title: string; url: string };
  toc: string;
}) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <BlogSEO title={post.title} summary={post.description} date={post.date} />

      <BlogContainer post={post} slug={post._raw.flattenedPath} toc={toc}>
        <MDXContent components={components} />
      </BlogContainer>

      <NextPrevArticles recommendedPostList={recommendedPostList} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPublishedPosts().map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sortedPosts = getSortedPosts();

  const post = sortedPosts.find(
    (post) => post._raw.flattenedPath === params.slug,
  );

  const toc = post.showToc ? await generateToC(post.body.raw) : null;

  const prevNextArticles = getNextPrevArticles(sortedPosts, post);

  return { props: { post, recommendedPostList: prevNextArticles, toc } };
};
