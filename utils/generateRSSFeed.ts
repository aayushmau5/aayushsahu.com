import { Feed } from "feed";
import fs from "fs";
import path from "path";

import config from "config.json";
import { allPosts } from "contentlayer/generated";

export function generateRSSFeed() {
  const feed = new Feed({
    title: "Aayush Kumar Sahu - Developer and Explorer",
    description: "aayushmau5' personal website",
    id: config.siteUrl,
    copyright: "CC 2022, Aayush Kumar Sahu",
    link: config.siteUrl,
    favicon: `${config.siteUrl}/favicon.ico`,
    language: "en",
    image: `${config.siteUrl}/socialBanner.png`,
    author: {
      name: config.user.name,
      email: config.user.email,
      link: config.siteUrl,
    },
  });

  allPosts
    .filter((p) => !p.draft)
    .forEach((post) =>
      feed.addItem({
        title: post.title,
        id: `${config.siteUrl}${post.url}`,
        link: `${config.siteUrl}${post.url}`,
        date: new Date(post.date),
        description: post.description,
      })
    );

  feed.addCategory("Programming");

  return feed.rss2();
}

export function createRSSFile() {
  const rssFilePath = path.join(process.cwd(), "public", "rss.xml");
  fs.writeFileSync(rssFilePath, generateRSSFeed());
}
