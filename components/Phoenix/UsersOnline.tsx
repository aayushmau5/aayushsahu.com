import { useState, useContext, useEffect } from "react";
import { Channel, Presence } from "phoenix";

import { SocketContext } from "./Socket";

export default function UsersOnline() {
  const [usersOnline, setUsersOnline] = useState(1);
  const [websiteViews, setWebsiteViews] = useState(1);
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

      phoenixChannel
        .join()
        .receive("ok", () => console.log("joined channel user-join"))
        .receive("error", (resp) => console.log("unable to join", resp));
    }

    // leave the channel when the component unmounts
    return () => {
      if (socket && phoenixChannel) phoenixChannel.leave();
    };
  }, [socket]);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <svg width="32" height="32" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            fill="none"
            r="10"
            stroke="#383a36"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              from="8"
              to="20"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="20" cy="20" fill="#383a36" r="10" />
        </svg>
        Total page views: {websiteViews} {"  ┊  "} Folks currently tuned in:{" "}
        {usersOnline}
      </div>
    </>
  );
}
