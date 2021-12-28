import { FiSearch } from "react-icons/fi";

import styles from "./style.module.css";

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
