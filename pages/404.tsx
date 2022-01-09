import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

import { PageSEO } from "@/components/SEO";

import styles from "@/styles/404.module.css";

export default function FourOhFourPage() {
  return (
    <>
      <PageSEO
        title="404 - Page not found | Aayush Kumar Sahu"
        description="Page not found"
      />
      <div className={styles.container}>
        <h1>Oops, looks like you have landed on a wrong page.</h1>
        <Link href="/">
          <a className="styledLink">
            <BsArrowLeftShort />
            Go back to home
          </a>
        </Link>
      </div>
    </>
  );
}
