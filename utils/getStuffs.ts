import path from "path";
import { getFileNamesWithoutExtension, readFileContent } from "./fileUtilities";
import {
  filterDraftPosts,
  generateAndInsertCover,
  getFileContentWithoutFrontMatter,
  getFilesId,
  getFrontMatter,
} from "./mdUtilities";

const stuffDirectoryPath = path.join(process.cwd(), "stuff");

export let stuffList = getStuffList();

function getStuffList() {
  const allPostsFrontMatter = getFileNamesWithoutExtension(
    stuffDirectoryPath
  ).map((slug) => {
    const fileContent = readFileContent(`${slug}.mdx`, stuffDirectoryPath);
    const frontMatter = getFrontMatter(fileContent);
    return {
      slug,
      ...frontMatter,
    };
  });

  return filterDraftPosts(allPostsFrontMatter);
}

export function getAllFilesId() {
  return getFilesId(getFileNamesWithoutExtension(stuffDirectoryPath));
}

export async function getFileData(fileNameWithoutExtension: string) {
  const fileContent = readFileContent(
    `${fileNameWithoutExtension}.mdx`,
    stuffDirectoryPath
  );

  const frontMatter = getFrontMatter(fileContent);
  await generateAndInsertCover(frontMatter);

  return {
    slug: fileNameWithoutExtension,
    frontMatter,
    content: getFileContentWithoutFrontMatter(fileContent),
  };
}
