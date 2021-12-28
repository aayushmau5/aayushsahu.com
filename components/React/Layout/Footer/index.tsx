import { FaDev, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import styles from "./style.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p style={{ fontSize: "1rem" }}>Made with ❤️ by aayushmau5</p>
      <div className={styles.socialsContainer}>
        <a
          href="https://www.github.com/aayushmau5"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://in.linkedin.com/in/aayushmau5"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/aayushmau5"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a href="https://dev.to/aayushmau5" target="_blank" rel="noreferrer">
          <FaDev />
        </a>
      </div>
    </div>
  );
}
