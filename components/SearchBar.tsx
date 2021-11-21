import styles from "../styles/Search.module.css";

import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder="Search blog" />
        <FiSearch />
      </div>
    </div>
  );
}
