import { useRouter } from "next/router";
import { useEffect } from "react";

import getResumeLink from "@/utils/getResumeLink";
import { PageSEO } from "@/components/SEO";

export default function Resume({ resumeFileNameLink }) {
  const router = useRouter();

  useEffect(() => {
    router.push(`/resume/${resumeFileNameLink}`);
  });

  return (
    <>
      <PageSEO
        title="Resume | Aayush Kumar Sahu"
        description="Checkout my resume"
      />
      <h1 style={{ fontFamily: "Handwriting" }}>Resume</h1>
      <p>Redirecting...</p>
    </>
  );
}

export const getStaticProps = async () => {
  const resumeFileNameLink = getResumeLink();

  return {
    props: {
      resumeFileNameLink,
    },
  };
};
