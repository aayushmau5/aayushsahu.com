import { useRouter } from "next/router";
import { useKBar } from "kbar";
import { BiCommand } from "react-icons/bi";

import styles from "./style.module.css";
import NavLink from "./NavLink";

export default function Nav() {
  const router = useRouter();
  const { query } = useKBar();

  return (
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
  );
}

function NavLinks({ router }) {
  return (
    <>
      <NavLink currentRoute={router.route} route="/">
        Home
      </NavLink>
      <NavLink currentRoute={router.route} route="/projects">
        Projects
      </NavLink>
      <NavLink currentRoute={router.route} route="/blog">
        Blog
      </NavLink>
      <NavLink currentRoute={router.route} route="/random">
        Random
      </NavLink>
      <NavLink currentRoute={router.route} route="/about">
        About
      </NavLink>
    </>
  );
}
