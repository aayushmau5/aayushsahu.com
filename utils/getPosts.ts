import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import readingTime from "reading-time";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const fileNames = fs.readdirSync(postsDirectory);
export let sortedPostData = getSortedPostsData();
let recommendedPostList = generateNextPrevArticlesList(sortedPostData);

interface Slug {
  slug: string;
}

type PostData = Slug & { [key: string]: any };

function getSortedPostsData() {
  const allPostsData: any = fileNames
    .map((fileName): PostData => {
      const slug = fileName.replace(/\.mdx$/, "");
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
    .filter((val) => !val.draft);

  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedPosts;
}

export function getAllTags() {
  const allTags = new Set<string>();
  sortedPostData.forEach((frontMatter) => {
    const tags: string[] = frontMatter.tags;
    if (tags) {
      if (!Array.isArray(tags)) throw new Error("tags must be an array");
      tags.forEach((tag) => allTags.add(tag));
    }
  });

  return Array.from(allTags);
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.mdx$/, ""),
    },
  }));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
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
    recommendedPostList: recommendedPostList[slug] || {},
  };
}

function generateNextPrevArticlesList(sortedPosts: any[]) {
  const sortedPostList = {};
  sortedPosts.forEach((post, index) => {
    sortedPostList[post.slug] = {};
    if (sortedPosts[index - 1]) {
      sortedPostList[post.slug].next = {
        title: sortedPosts[index - 1].title,
        slug: sortedPosts[index - 1].slug,
      };
    }
    if (sortedPosts[index + 1]) {
      sortedPostList[post.slug].prev = {
        title: sortedPosts[index + 1].title,
        slug: sortedPosts[index + 1].slug,
      };
    }
  });
  return sortedPostList;
}
