import { useState, useEffect, useContext } from "react";
import { Channel, Presence } from "phoenix";
import Link from "next/link";

import config from "config.json";

import styles from "./style.module.css";
import HomeStyles from "@/styles/Home.module.css";

import { SocketContext } from "@/components/Phoenix/Socket";
import UsersOnline from "@/components/Phoenix/UsersOnline";
import SpotifyNowPlaying from "@/components/Phoenix/Spotify";
import Theme from "@/components/Theme";

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
      <Theme />
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
          </div>
          <div className={styles.linksColumn}>
            <Link href={"/links"}>
              <a aria-label="Links">Links</a>
            </Link>
            <Link href="/resume">
              <a target="_blank" rel="noreferrer" aria-label="Resume">
                Resume
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
