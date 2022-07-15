import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";

import { getAllFilesId, getFileData } from "@/utils/getStuffs";
import { generateMdx } from "@/utils/mdxUtilities";
import { PageSEO } from "@/components/SEO";
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
import StuffContainer from "@/components/React/Stuff/Container";

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

export default function Stuff({ frontMatter, source }) {
  return (
    <>
      <PageSEO
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <StuffContainer frontMatter={frontMatter}>
        <MDXRemote {...source} components={components} />
      </StuffContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllFilesId();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, frontMatter } = await getFileData(params.slug as string);

  return {
    props: {
      source: await generateMdx(frontMatter, content),
      frontMatter,
    },
  };
};
