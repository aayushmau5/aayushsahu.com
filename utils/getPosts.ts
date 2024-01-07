import path from "path";
import {
  filterDraftPosts,
  getFileContentWithoutFrontMatter,
  getFilesId,
  getFrontMatter,
  getTagsFromFrontMatter,
  setISODate,
  setReadingTime,
  sortPostsByDate,
} from "./mdUtilities";
import { getFileNamesWithoutExtension, readFileContent } from "./fileUtilities";
import { Post } from "contentlayer/generated";

const postsDirectoryPath = path.join(process.cwd(), "posts");
export let sortedPostData = getSortedPostsData();

function getSortedPostsData() {
  const allPostsFrontMatter = getFileNamesWithoutExtension(
    postsDirectoryPath
  ).map((slug) => {
    const fileContent = readFileContent(`${slug}.mdx`, postsDirectoryPath);
    const frontMatter = getFrontMatter(fileContent);
    const content = getFileContentWithoutFrontMatter(fileContent);
    setISODate(frontMatter);
    setReadingTime(frontMatter, content);
    return {
      slug,
      ...frontMatter,
    };
  });

  const filteredPosts = filterDraftPosts(allPostsFrontMatter);
  return sortPostsByDate(filteredPosts);
}

export function getAllTags() {
  const allTags = new Set<string>();
  sortedPostData.forEach((frontMatter: any) => {
    const tags = getTagsFromFrontMatter(frontMatter);
    tags.forEach((tag) => allTags.add(tag));
  });

  return Array.from(allTags);
}

export function getAllPostIds() {
  return getFilesId(getFileNamesWithoutExtension(postsDirectoryPath));
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
