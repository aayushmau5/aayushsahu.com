import { SocketContext } from "@/components/Phoenix/Socket";
import { useContext, useEffect } from "react";

type Props = {
  channel: string;
};

export default function Chat({ channel }: Props) {
  const socket = useContext(SocketContext);

  useEffect(() => {
    console.log("hello from chat compoent");
    if (socket) {
      const phoenixChannel = socket.channel(channel);

      phoenixChannel
        .join()
        .receive("ok", () => {})
        .receive("error", () => {});
    }
  }, [socket, channel]);

  return <div>hello from chat component</div>;
}
