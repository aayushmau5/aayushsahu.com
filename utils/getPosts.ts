import path from "path";
import {
  filterDraftPosts,
  generateAndInsertCover,
  getFileContentWithoutFrontMatter,
  getFilesId,
  getFrontMatter,
  getTagsFromFrontMatter,
  setISODate,
  setReadingTime,
  sortPostsByDate,
} from "./mdUtilities";
import { getFileNamesWithoutExtension, readFileContent } from "./fileUtilities";

const postsDirectoryPath = path.join(process.cwd(), "posts");
export let sortedPostData = getSortedPostsData();
let recommendedPostList = generateNextPrevArticlesList(sortedPostData);

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

export async function getPostData(fileNameWithoutExtension: string) {
  const fileContent = readFileContent(
    `${fileNameWithoutExtension}.mdx`,
    postsDirectoryPath
  );

  const frontMatter = getFrontMatter(fileContent);
  const content = getFileContentWithoutFrontMatter(fileContent);
  setISODate(frontMatter);
  setReadingTime(frontMatter, content);
  await generateAndInsertCover(frontMatter);

  return {
    slug: fileNameWithoutExtension,
    frontMatter,
    content,
    recommendedPostList: recommendedPostList[fileNameWithoutExtension] || {},
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
