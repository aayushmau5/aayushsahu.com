const parseHeadings = /(#|##|###|####) (.*$)/gim;

function generateHeadingId(string: string) {
  return new String(string)
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s/g, "-");
}

function getType(heading: string) {
  if (heading.startsWith("####")) return "h4";
  if (heading.startsWith("###")) return "h3";
  if (heading.startsWith("##")) return "h2";
  if (heading.startsWith("#")) return "h1";
}

export default function getToc(content: string) {
  const headings =
    content.match(parseHeadings)?.map((heading) => {
      const content = heading.replace(/#/g, "").trim();
      return {
        content,
        headingId: generateHeadingId(content),
        type: getType(heading),
      };
    }) ?? [];

  return headings;
}
