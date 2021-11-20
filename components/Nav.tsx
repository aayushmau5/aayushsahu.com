import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../styles/Nav.module.css";
import NavLink from "./NavLink";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function changeMenuOpenState() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <MobileMenu menuOpen={menuOpen} onClick={changeMenuOpenState} />
      <div
        className={`${styles.LinksContainer} ${
          menuOpen ? styles.activeLinksContainer : null
        }`}
      >
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
      <NavLink currentRoute={router.route} route="/next">
        Next
      </NavLink>
      <NavLink currentRoute={router.route} route="/projects">
        Works
      </NavLink>
      <NavLink currentRoute={router.route} route="/blog">
        Blog
      </NavLink>
    </>
  );
}

function MobileMenu({ onClick, menuOpen }) {
  return (
    <div className={styles.mobileNavContainer}>
      <button
        onClick={onClick}
        className={`${styles.hamburgerMenuButton} ${
          menuOpen ? styles.menuActive : null
        }`}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
}
