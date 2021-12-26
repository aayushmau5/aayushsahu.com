// script to create an empty post already filled with frontmatter
const path = require("path");
const fs = require("fs");

const fileName = process.argv[2] || "default";
const filePath = path.resolve(".", "posts", `${fileName}.mdx`);

const frontMatter = `---
title: "${fileName}"
description: ""
date: ${new Date().toISOString()}
tags: []
cover:
	image: "/blogImages/"
	alt: ""
	caption: ""
draft: true
showToc: true
---`;

function createPost(path, frontMatter) {
  fs.writeFileSync(path, frontMatter);
  console.log(`new post ${filePath} created.`);
}

createPost(filePath, frontMatter);
