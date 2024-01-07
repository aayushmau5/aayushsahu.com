import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date", required: true },
    draft: { type: "boolean", required: true },
    tags: { type: "list", of: { type: "string" } },
    showToc: { type: "boolean", default: false },
    cover: { type: "json" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    readingTime: {
      type: "string",
      resolve: (post) => readingTime(post.body.raw).text,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [rehypePrism, { showLineNumbers: true }],
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "prepend" }],
    ],
    remarkPlugins: [remarkGfm],
  },
});
