"use client";

import { useChat } from "@ai-sdk/react";
import ChatForm from "@/components/Chat/ChatForm";
import ChatMessages from "@/components/Chat/ChatMessages";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } =
    useChat();

  return (
    <div className="relative h-full">
      <ChatMessages messages={messages} status={status} />
      <ChatForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        status={status}
      />
    </div>
  );
}
