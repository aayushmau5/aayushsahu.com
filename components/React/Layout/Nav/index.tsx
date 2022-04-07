import { useRouter } from "next/router";

import styles from "./style.module.css";
import NavLink from "./NavLink";

export default function Nav() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={`${styles.LinksContainer}`}>
        <NavLinks router={router} />
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
      <NavLink currentRoute={router.route} route="/about">
        About
      </NavLink>
      <NavLink currentRoute={router.route} route="/life">
        Life
      </NavLink>
    </>
  );
}
