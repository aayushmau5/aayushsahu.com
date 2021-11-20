import { useRouter } from "next/router";

import styles from "../styles/Nav.module.css";
import NavLink from "./NavLink";

export default function Nav() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <NavLink currentRoute={router.route} route="/">
        Home
      </NavLink>
      <NavLink currentRoute={router.route} route="/next">
        Next
      </NavLink>
      <NavLink currentRoute={router.route} route="/projects">
        Projects
      </NavLink>
    </div>
  );
}
