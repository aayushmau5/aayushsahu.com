import { GetServerSideProps } from "next";

import { sortedPostData } from "@/utils/getPosts";

function generateSiteMap(posts) {
  const siteUrl = "https://aayushsahu.com";

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${siteUrl}</loc>
     </url>
     <url>
       <loc>${siteUrl}/projects</loc>
     </url>
     <url>
       <loc>${siteUrl}/blog</loc>
     </url>
     <url>
       <loc>${siteUrl}/about</loc>
     </url>
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${`${siteUrl}/blog/${post.slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap(sortedPostData);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {}
