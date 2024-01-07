import { Post, allPosts } from "contentlayer/generated";
import { GetServerSideProps } from "next";

function generateSiteMap(posts: Post[]) {
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
     <url>
       <loc>${siteUrl}/uses</loc>
     </url>
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${`${siteUrl}${post.url}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const filteredPosts = allPosts.filter((p) => !p.draft);
  const sitemap = generateSiteMap(filteredPosts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {}
