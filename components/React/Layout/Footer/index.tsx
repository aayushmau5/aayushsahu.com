import {
  FaDev,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRss,
} from "react-icons/fa";

import config from "config.json";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p style={{ fontSize: "1rem" }}>Made with ❤️ by {config.username}</p>
      <div className={styles.socialsContainer}>
        <a
          href={config.user.githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href={config.user.linkedinLink}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={config.user.twitterLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href={config.user.devToLink}
          target="_blank"
          rel="noreferrer"
          aria-label="DevTo"
        >
          <FaDev />
        </a>
        <a
          href="/rss.xml"
          target="_blank"
          rel="noreferrer"
          aria-label="RSS feed"
        >
          <FaRss />
        </a>
      </div>
    </div>
  );
}
