import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import generateToC from "./generateToC";

export async function generateMdx(frontMatter, content: string) {
  return await serialize(content, {
    scope: frontMatter,
    mdxOptions: {
      rehypePlugins: [
        [rehypePrism, { showLineNumbers: true }],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "prepend" }],
      ],
      remarkPlugins: [remarkGfm],
    },
  });
}

export async function getToC(frontMatter, content: string) {
  let tableOfContents: string = null;

  if (typeof frontMatter.showToc === "undefined") {
    tableOfContents = await generateToC(content);
  } else {
    if (frontMatter.showToc) {
      tableOfContents = await generateToC(content);
    }
  }

  return tableOfContents;
}
