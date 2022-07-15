import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";

import { getAllPostIds, getPostData } from "@/utils/getPosts";
import { generateMdx, getToC } from "@/utils/mdxUtilities";
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
import SeparatorSvg from "@/components/React/SeparatorSvg";
import NextPrevArticles from "@/components/React/Blog/NextPrevArticles";

const components = {
  pre: (props) => <Pre {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  a: (props) => <StyledAnchor {...props} />,
  hr: (props) => <SeparatorSvg {...props} stroke="#569cd6" />,
  ol: (props) => <CustomOl {...props} />,
  ul: (props) => <CustomUl {...props} />,
  code: (props) => (
    <CodeBlock
      filename={props.filename}
      highlight={props.highlight}
      {...props}
    />
  ),
  HiddenExpand,
  Callout,
  BasicCard,
  CardWithTitle,
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

  return {
    props: {
      source: await generateMdx(frontMatter, content),
      frontMatter,
      slug,
      tableOfContents: await getToC(frontMatter, content),
      recommendedPostList,
    },
  };
};
