import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import readingTime from "reading-time";
import html from "remark-html";
import prism from "remark-prism";

const postsDirectory = path.join(process.cwd(), "posts");
const fileNames = fs.readdirSync(postsDirectory);

export function getSortedPostsData() {
  const allPostsData: any = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");

      const { data: frontMatter, content } = matter(fileContents);
      frontMatter.date = new Date(frontMatter.date).toISOString();
      frontMatter.readingTime = readingTime(content);
      return {
        slug,
        ...frontMatter,
      };
    })
    .filter((val: any) => !val.draft);

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);
  matterResult.data.date = new Date(matterResult.data.date).toISOString();
  matterResult.data.readingTime = readingTime(matterResult.content);

  const processedHTML = await remark()
    .use(prism, {
      plugins: [
        "autolinker",
        "command-line",
        "data-uri-highlight",
        "diff-highlight",
        "inline-color",
        "keep-markup",
        "line-numbers",
        "show-invisibles",
        "treeview",
      ],
    })
    .use(html, { sanitize: false })
    .process(matterResult.content);

  // const processedContent = await rehype()
  //   .use(rehypeAutolinkHeadings)
  //   .use(rehypePrism, { showLineNumbers: true })
  //   .process(processedHTML);

  const contentHtml = processedHTML.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
