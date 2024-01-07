import matter from "gray-matter";
import readingTime from "reading-time";

export function getFilesId(files: string[]) {
  return files.map((fileName) => ({
    params: { slug: fileName },
  }));
}

export function getFrontMatter(fileContent: string) {
  const { data: frontMatter } = matter(fileContent);
  return frontMatter;
}

export function getFileContentWithoutFrontMatter(fileContent: string) {
  const { content } = matter(fileContent);
  return content;
}

export async function generateAndInsertCover(frontMatter: any) {
  if (frontMatter.cover?.caption) {
    const caption = await remark()
      .use(html, { sanitize: false })
      .process(frontMatter.cover.caption);

    frontMatter.cover.caption = caption.toString();
  }
}

export function setISODate(frontMatter: any) {
  frontMatter.date = new Date(frontMatter.date).toISOString();
}

export function setReadingTime(frontMatter: any, fileContent: string) {
  frontMatter.readingTime = readingTime(fileContent);
}

export function filterDraftPosts(frontMatterList: any[]) {
  return frontMatterList.filter((val) => !val.draft);
}

export function sortPostsByDate(posts: any[]) {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getTagsFromFrontMatter(frontMatter: any) {
  const tags: string[] = frontMatter.tags;
  if (tags) {
    if (!Array.isArray(tags)) throw new Error("tags must be an array");
    return tags;
  }
  return [];
}
