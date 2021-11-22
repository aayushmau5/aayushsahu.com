import styles from "../styles/Search.module.css";

import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
          placeholder="Search blog"
        />
        <FiSearch />
      </div>
    </div>
  );
}
