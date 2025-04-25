import { useEffect, useRef } from "react";
import { RiseLoader } from "react-spinners";
import ChatMessageItem from "./ChatMessageItem";

interface ChatMessagesProps {
  messages: { id: string; role: string; content: string }[];
  status: "submitted" | "streaming" | "ready" | "error";
}

export default function ChatMessages({ messages, status }: ChatMessagesProps) {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="flex flex-col w-full p-4 pb-36 mx-auto stretch">
      <ChatMessageItem messages={messages} />
      <div className="flex justify-center">
        <RiseLoader
          loading={status === "submitted" || status === "streaming"}
          color="#a941db"
          size={6}
          className="m-2"
        />
      </div>
      <div ref={endOfMessagesRef} />
    </div>
  );
}
