import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftShort } from "react-icons/bs";

import { PageSEO } from "@/components/SEO";

import styles from "@/styles/404.module.css";
import cat from "@/public/cat.jpg";

export default function FourOhFourPage() {
  return (
    <>
      <PageSEO
        title="404 - Page not found | Aayush Kumar Sahu"
        description="Page not found"
      />
      <div className={styles.container}>
        <div style={{ width: "60%", height: "auto", margin: "1rem auto" }}>
          <Image src={cat} alt="Cat image" />
        </div>
        <h1>Oh no, you found the cat!</h1>
        <Link href="/">
          <a className="styledLink">
            <BsArrowLeftShort />
            Leave the cat be
          </a>
        </Link>
      </div>
    </>
  );
}
