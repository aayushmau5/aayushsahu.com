import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";
import toc from "markdown-toc";
import html from "remark-html";
import { remark } from "remark";

export function generateToC(markdownContent: string) {
  const tableOfContents = toc(markdownContent);
  return parseToCToHtml(tableOfContents.content);
}

async function parseToCToHtml(tocMarkdown: string) {
  const parsedHtml = await remark().use(html).process(tocMarkdown);
  return parsedHtml.toString();
}

export function getPublishedPosts() {
  return allPosts.filter((p) => !p.draft);
}

export function getSortedPosts() {
  return getPublishedPosts().sort((a, b) =>
    compareDesc(parseISO(a.date), parseISO(b.date))
  );
}

export function getAllTags(allPosts: Post[]) {
  const allTags = new Set<string>();
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => allTags.add(tag));
  });

  return Array.from(allTags);
}

export function getNextPrevArticles(sortedPosts: Post[], currentPost: Post) {
  const sortedPostList = {
    next: null,
    prev: null,
  };
  const slug = currentPost._raw.flattenedPath;
  const index = sortedPosts.findIndex((p) => p._raw.flattenedPath === slug);
  if (sortedPosts[index - 1]) {
    sortedPostList.next = {
      title: sortedPosts[index - 1].title,
      url: sortedPosts[index - 1].url,
    };
  }
  if (sortedPosts[index + 1]) {
    sortedPostList.prev = {
      title: sortedPosts[index + 1].title,
      url: sortedPosts[index + 1].url,
    };
  }
  return sortedPostList;
}
