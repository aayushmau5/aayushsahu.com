import Image from "next/image";

import { FaDev, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>
        Made with <span className={styles.love}>:love:</span> by Aayush Kumar
        Sahu
      </p>
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
