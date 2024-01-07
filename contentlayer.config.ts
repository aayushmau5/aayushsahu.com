import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import { slug } from "github-slugger";

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
    headings: {
      type: "json",
      resolve: async (post) => {
        const headingsRegex = /\n(?<type>#{1,6})\s+(?<content>.+)/g;
        const headings = Array.from(post.body.raw.matchAll(headingsRegex)).map(
          ({ groups }) => {
            const type = groups?.type;
            const content = groups?.content;
            return {
              level: type.length,
              text: content,
              slug: content ? slug(content) : undefined,
            };
          }
        );

        return headings;
      },
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
