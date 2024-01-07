import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";

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
