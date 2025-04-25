import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessageItemProps {
  messages: { id: string; role: string; content: string }[];
}

export default function ChatMessageItem({ messages }: ChatMessageItemProps) {
  return (
    <>
      {messages.map((m) => (
        <div
          key={m.id}
          className={`p-4 mb-2
            ${
              m.role === "user"
                ? "bg-zinc-300 dark:bg-zinc-700 w-[80%] self-end rounded-xl shadow-xl"
                : ""
            }`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
        </div>
      ))}
    </>
  );
}
