import fs from "fs";
import path from "path";

export function getFileNamesWithoutExtension(directoryPath: string) {
  const fileNames = fs.readdirSync(directoryPath);
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function readFileContent(fileName: string, prefix?: string) {
  let filePath = fileName;
  if (prefix) filePath = path.join(prefix, fileName);
  return fs.readFileSync(filePath, "utf-8");
}
