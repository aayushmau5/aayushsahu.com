import Link from "next/link";

import styles from "./style.module.css";

export default function NavLink({ children, route, currentRoute }) {
  return (
    <Link href={route}>
      <a
        className={`styledLink ${
          currentRoute === route ? styles.active : null
        }`}
      >
        {children}
      </a>
    </Link>
  );
}
