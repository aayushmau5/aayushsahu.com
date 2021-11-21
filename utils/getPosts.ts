import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkToc from "remark-toc";

const postsDirectory = path.join(process.cwd(), "posts");
const fileNames = fs.readdirSync(postsDirectory);

export function getSortedPostsData() {
  const allPostsData: any = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");

      const { data: frontMatter } = matter(fileContents);
      frontMatter.date = new Date(frontMatter.date).toISOString();
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

  const processedContent = await remark()
    .use(html)
    .use(remarkToc)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
