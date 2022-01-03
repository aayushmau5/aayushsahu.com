import toc from "markdown-toc";

interface TocJson {
  content: string;
  slug: string;
  lvl: number;
  i: number;
  seen: number;
}

interface TransformedToC {
  content: string;
  headingId: string;
  headingLevel: number;
  type: string;
}

export function generateToC(markdownContent: string): TocJson[] {
  return toc(markdownContent).json;
}

function getHeadingType(headingLevel: number): string {
  switch (headingLevel) {
    case 1:
      return "h1";
    case 2:
      return "h2";
    case 3:
      return "h3";
    case 4:
      return "h4";
    case 5:
      return "h5";
    case 6:
      return "h6";
    default:
      return "h1";
  }
}

export function transformToC(jsonToc: TocJson[]): TransformedToC[] {
  return jsonToc.map((item) => ({
    content: item.content,
    headingId: item.slug,
    headingLevel: item.lvl,
    type: getHeadingType(item.lvl),
  }));
}
