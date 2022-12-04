import { createContext, useState } from "react";
import { Socket } from "socket.io-client";

interface Props {
  children: React.ReactNode;
}

type Context = ReturnType<typeof useState<Socket | null>>;

export const SocketContext = createContext<Context>({} as any);

export const SocketProvider = ({ children }: Props) => {
  const socketState = useState<Socket | null | undefined>(null);

  return (
    <SocketContext.Provider value={socketState}>
      {children}
    </SocketContext.Provider>
  );
};
