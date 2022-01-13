import Head from "next/head";
import { useRouter } from "next/router";

import config from "config.json";

const siteMetadata = {
  title: config.title,
  siteUrl: config.siteUrl,
  twitter: config.user.twitterLink,
  socialImage: config.socialImage,
  author: config.username,
};

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} key={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
    </Head>
  );
};

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialImage;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialImage;

  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};

export const BlogSEO = ({ title, summary, date, slug }) => {
  const router = useRouter();

  const publishedAt = new Date(date).toISOString();
  const featuredImage = CloudinaryMetaImageUrl({ title });

  const authorDetails = {
    "@type": "Person",
    name: siteMetadata.author,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteMetadata.siteUrl}/blog/${slug}`,
    },
    headline: title,
    image: {
      "@type": "ImageObject",
      url: featuredImage,
    },
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: authorDetails,
    publisher: {
      "@type": "Organization",
      name: siteMetadata.author,
    },
    description: summary,
  };

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        ogImage={featuredImage}
        twImage={featuredImage}
      />
      <Head>
        {date && (
          <meta property="article:published_time" content={publishedAt} />
        )}
        <link
          rel="canonical"
          href={`${siteMetadata.siteUrl}${router.asPath}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  );
};

// thanks to: https://braydoncoyer.dev/blog/how-to-dynamically-create-open-graph-images-with-cloudinary-and-next.js
export const CloudinaryMetaImageUrl = ({
  title,
  cloudName = "dbsdoq31k",
  imagePublicId = "blog_banner.png",
  cloudinaryUrlBase = "https://res.cloudinary.com",
  version = "v1641893609",
  titleFont = "roboto",
  titleExtraConfig = "_bold",
  textColor = "FFFFFF",
  textAreaWidth = 650,
  textAreaHeight = 450,
  titleFontSize = 40,
  imageWidth = 1200,
  imageHeight = 630,
  textBottomOffset = -40,
}): string => {
  const imageConfig = [
    `w_${imageWidth}`,
    `h_${imageHeight}`,
    "c_fill",
    "f_auto",
  ].join(",");

  const titleConfig = [
    `w_${textAreaWidth}`,
    `h_${textAreaHeight}`,
    "c_fit",
    `co_rgb:${textColor}`,
    `y_${textBottomOffset}`,
    `l_text:${titleFont}_${titleFontSize}${titleExtraConfig}:${encodeURIComponent(
      title
    )}`,
  ].join(",");

  const urlParts = [
    cloudinaryUrlBase,
    cloudName,
    "image",
    "upload",
    imageConfig,
    titleConfig,
    version,
    imagePublicId,
  ];

  // "https://res.cloudinary.com/dbsdoq31k/image/upload/w_1200,h_630,c_fit,co_rgb:FFFFFF,y_-40,l_text:arial_60_bold:The%20visitor%20design%20pattern/v1641893609/blog_banner.png";

  return urlParts.join("/");
};
