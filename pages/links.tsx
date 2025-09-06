import Link from "next/link";
import Image from "next/image";

import { PageSEO } from "@/components/SEO";
import glitch from "@/public/glitch.webp";
import styles from "@/styles/Home.module.css";

export default function Links() {
  return (
    <div className={styles.container}>
      <PageSEO title="Links | Aayush Sahu" description="My online presence" />
      <h1 className={styles.linksTitle}>Links</h1>

      <div style={{ width: "60%", height: "auto", margin: "1rem auto" }}>
        <Image src={glitch} alt="Cat image" />
      </div>
      <p>My online presence and stuff</p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "7px",
        }}
      >
        <li>
          <Link href="/books">
            <a className="styledLink">Bookshelf</a>
          </Link>
        </li>
        <li>
          <Link href="/uses">
            <a className="styledLink">Uses</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="styledLink">About me</a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a className="styledLink">Resume</a>
          </Link>
        </li>
        <li>
          <a className="styledLink" href="/rss.xml" target="_blank">
            Blog RSS feed
          </a>
        </li>
        <li>
          <a
            className="styledLink"
            href="https://phoenix.aayushsahu.com/dashboard"
            target="_blank"
            rel="noreferrer"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            className="styledLink"
            href="https://www.github.com/aayushmau5"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="styledLink"
            href="https://gitlab.com/aayushmau5"
            target="_blank"
            rel="noreferrer"
          >
            Gitlab
          </a>
        </li>
        <li>
          <a
            className="styledLink"
            href="https://twitter.com/aayushmau5"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="styledLink"
            href="https://bsky.app/profile/aayushsahu.com"
            target="_blank"
            rel="noreferrer"
          >
            Bluesky
          </a>
        </li>
        <li>
          <a
            className="styledLink"
            href="https://genserver.social/aayushmau5"
            target="_blank"
            rel="noreferrer"
          >
            Mastodon
          </a>
        </li>
        <li>
          <a
            className="styledLink"
            href="https://in.linkedin.com/in/aayushmau5"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="styledLink"
            href="https://open.spotify.com/user/607vbck89ne5qmel2xfmkdfoq"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>
        </li>
        <li>
          <a
            className="styledLink"
            href="https://dev.to/aayushmau5"
            target="_blank"
            rel="noreferrer"
          >
            DevTo
          </a>
        </li>
      </ul>
    </div>
  );
}
