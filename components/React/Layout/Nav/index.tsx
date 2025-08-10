import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useKBar } from "kbar";
import { BiCommand } from "react-icons/bi";

import styles from "./style.module.css";
import NavLink from "./NavLink";
import sunset from "@/public/index.webp";

export default function Nav() {
  const router = useRouter();
  const { query } = useKBar();

  const [isHomePage, setIsHomePage] = useState(router.pathname === "/");

  useEffect(() => {
    setIsHomePage(router.pathname === "/");
  }, [router.pathname]);

  return (
    <div
      className={styles.emptyContainer}
      style={!isHomePage ? { paddingBottom: "50px" } : {}}
    >
      {isHomePage && (
        <div className={styles.imageContainer}>
          <Image
            src={sunset}
            alt="Sunset by the mountains"
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.container}>
        <div className={`${styles.LinksContainer}`}>
          <NavLinks router={router} />
          <span className={styles.kbar}>
            or press{" "}
            <button onClick={query.toggle} className={styles.kbarClick}>
              Ctrl/CMD + K
            </button>
          </span>
          <button
            onClick={query.toggle}
            className={styles.commandIcon}
            aria-label="Command Bar"
          >
            <BiCommand />
          </button>
        </div>
      </div>
    </div>
  );
}

function NavLinks({ router }) {
  return (
    <>
      <NavLink currentRoute={router.route} route="/">
        Home
      </NavLink>
      <NavLink currentRoute={router.route} route="/blog">
        Blog
      </NavLink>
      <NavLink currentRoute={router.route} route="/projects">
        Projects
      </NavLink>
      <NavLink currentRoute={router.route} route="/about">
        About
      </NavLink>
    </>
  );
}
