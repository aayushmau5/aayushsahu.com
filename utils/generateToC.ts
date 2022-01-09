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
