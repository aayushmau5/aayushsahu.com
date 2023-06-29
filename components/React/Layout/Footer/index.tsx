import { useState, useEffect, useContext } from "react";
import { Channel, Presence } from "phoenix";
import Link from "next/link";

import config from "config.json";

import styles from "./style.module.css";
import HomeStyles from "@/styles/Home.module.css";

import { SocketContext } from "@/components/Phoenix/Socket";
import UsersOnline from "@/components/Phoenix/UsersOnline";
import SpotifyNowPlaying from "@/components/Phoenix/Spotify";

export default function Footer() {
  const [usersOnline, setUsersOnline] = useState(1);
  const [websiteViews, setWebsiteViews] = useState(1);
  const [nowPlaying, setNowPlaying] = useState({});
  const socket = useContext(SocketContext);

  useEffect(() => {
    let phoenixChannel: Channel;
    if (socket) {
      phoenixChannel = socket.channel("user-join");

      let presence = new Presence(phoenixChannel);
      presence.onSync(() => {
        presence.list((_id, { metas: metas }) => {
          setUsersOnline(metas.length);
        });
      });

      phoenixChannel.on("view-count", (response) =>
        setWebsiteViews(response.count)
      );

      phoenixChannel.on("spotify:now_playing_update", (response) =>
        setNowPlaying(response)
      );

      phoenixChannel
        .join()
        .receive("ok", () => console.log("joined channel user-join"))
        .receive("error", (resp) => console.log("unable to join", resp));
    }
  }, [socket]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <SpotifyNowPlaying nowPlayingResponse={nowPlaying} />
          <UsersOnline usersOnline={usersOnline} websiteViews={websiteViews} />
        </div>
        <p className={styles.paragraph}>
          Made with <span className={HomeStyles.highlight}>NextJS</span>
        </p>
      </div>
      <div className={styles.others}>
        <div className={styles.socialsContainer}>
          <div className={styles.linksColumn}>
            <Link href={"/"}>
              <a aria-label="Home">Home</a>
            </Link>
            <Link href={"/blog"}>
              <a aria-label="Blogs">Blogs</a>
            </Link>
            <Link href={"/about"}>
              <a aria-label="About">About</a>
            </Link>
            <Link href="/resume">
              <a target="_blank" rel="noreferrer" aria-label="Resume">
                Resume
              </a>
            </Link>
          </div>
          <div className={styles.linksColumn}>
            <a
              href="https://phoenix.aayushsahu.com/dashboard"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              Dashboard
            </a>
            <a
              href={config.user.githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              Github
            </a>
            <a
              href={config.user.twitterLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href={config.user.mastodonLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Mastodon"
            >
              Mastodon
            </a>
          </div>
          <div className={styles.linksColumn}>
            <a
              href={config.user.linkedinLink}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={config.user.devToLink}
              target="_blank"
              rel="noreferrer"
              aria-label="DevTo"
            >
              DevTo
            </a>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noreferrer"
              aria-label="RSS feed"
            >
              RSS
            </a>
            <a
              href="https://open.spotify.com/user/607vbck89ne5qmel2xfmkdfoq"
              target="_blank"
              rel="noreferrer"
              aria-label="Spotify"
            >
              Spotify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
