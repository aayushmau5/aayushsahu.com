// script to create an empty stuff post already filled with frontmatter
const path = require("path");
const fs = require("fs");

const fileName = process.argv[2] || "default";
const filePath = path.resolve(".", "stuff", `${fileName}.mdx`);

const frontMatter = `---
title: "${fileName}"
description: ""
draft: true
---`;

function createStuffPost(path, frontMatter) {
  fs.writeFileSync(path, frontMatter);
  console.log(`new stuff post ${filePath} created.`);
}

createStuffPost(filePath, frontMatter);
