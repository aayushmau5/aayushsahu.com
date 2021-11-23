import Head from "next/head";
import { useRouter } from "next/router";

const siteMetadata = {
  title: "Aayush Kumar Sahu - Developer and Explorer",
  siteUrl: "https://aayushsahu.com",
  twitter: "https://twitter.com/aayushmau5",
  socialImage: "/socialBanner.png",
  author: "aayushmau5",
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

export const BlogSEO = ({ title, summary, date, slug, image }) => {
  const router = useRouter();

  const publishedAt = new Date(date).toISOString();
  let featuredImage;
  if (image) {
    if (image.startsWith("http")) {
      featuredImage = {
        "@type": "ImageObject",
        url: image,
      };
    } else {
      featuredImage = {
        "@type": "ImageObject",
        url: `${siteMetadata.siteUrl}${image}`,
      };
    }
  } else {
    featuredImage = {
      "@type": "ImageObject",
      url: `${siteMetadata.siteUrl}${siteMetadata.socialImage}`,
    };
  }
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
    image: featuredImage,
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
        twImage={image}
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
