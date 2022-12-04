import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAuth } from "./useAuth";

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [auth] = useAuth();
  const setupSocket = () => {
    // get token

    if (auth?.accessToken && !socket) {
      const newSocket = io("http://localhost:3004", {
        query: {
          token: auth.accessToken,
        },
      });
      newSocket.on("disconnect", () => {
        console.log("socket disconnect");
        setSocket(null);
        setTimeout(setupSocket, 3000);
      });

      newSocket.on("connect", () => {
        console.log("socket connected");
      });

      newSocket.on("socket_data", (res) => {
        console.log("socket data", res);
      });

      setSocket(newSocket);
    }
  };
  useEffect(() => {
    setupSocket();
    return () => {
      console.log("io disconnect");
      socket?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return setupSocket;
};
