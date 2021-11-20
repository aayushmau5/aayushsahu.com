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
      <div className={styles.mobileNavContainer}>
        <HamburgerMenuButton onClick={changeMenuOpenState} />
        {menuOpen ? <HamburgerMenu router={router} /> : null}
      </div>
      <div className={styles.LinksContainer}>
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

function HamburgerMenuButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles.hamburgerMenuButton}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}

function HamburgerMenu({ router }) {
  return (
    <div className={styles.hamburgerMenu}>
      <NavLinks router={router} />
    </div>
  );
}
