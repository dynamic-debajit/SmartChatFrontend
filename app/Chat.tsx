"use client";

import { Socket, io } from "socket.io-client";
import { useEffect, useState, FC } from "react";

const ChatContainer: FC = () => {
  const [socket, setSocket] = useState<Socket | undefined>();
  useEffect(() => {
    setSocket(io("localhost:4000"));
  });

  return <div>test</div>;
};

export default ChatContainer;
