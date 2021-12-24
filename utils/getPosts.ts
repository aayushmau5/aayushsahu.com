import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import readingTime from "reading-time";
import html from "remark-html";

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

export function getAllTags() {
  // TODO: need to get the blog data associated with a certain tag
  const allTags: string[] = [];

  const data = fileNames
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");

      const { data: frontMatter } = matter(fileContents);
      return frontMatter;
    })
    .filter((frontMatter) => {
      return !frontMatter.draft;
    });

  data.forEach((frontMatter) => {
    const tags: string | string[] = frontMatter.tags;
    if (tags) {
      if (Array.isArray(tags)) {
        const newTags = tags.filter((tag) => !allTags.includes(tag));
        allTags.push(...newTags);
        return allTags;
      }
      if (allTags.includes(tags)) {
        return allTags;
      }
      allTags.push(tags);
    }
  });

  return allTags;
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
  if (matterResult.data.cover?.caption) {
    const caption = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.data.cover.caption);
    matterResult.data.cover.caption = caption.toString();
  }

  return {
    slug,
    content: matterResult.content,
    frontMatter: matterResult.data,
  };
}
