import { ChatRequestOptions } from "ai";
import { SendHorizontal } from "lucide-react";
import { useRef, useState } from "react";

interface ChatFormProps {
  input: string;
  handleInputChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions,
  ) => void;
  status: "submitted" | "streaming" | "ready" | "error";
}

export default function ChatForm({
  input,
  handleInputChange,
  handleSubmit,
  status,
}: ChatFormProps) {
  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (status === "submitted" || status === "streaming" || !input) return;

    handleSubmit(event, {
      experimental_attachments: files,
    });

    setFiles(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && event.ctrlKey) {
      onSubmit(event);
    }
  }

  return (
    <div className="fixed bottom-[0px] w-full !w-[-webkit-fill-available] max-w-[1200px]">
      <form
        onSubmit={onSubmit}
        className="
              flex flex-col items-center space-y-2 p-2
              rounded bg-zinc-800"
      >
        <div className="w-full flex flex-col gap-1 rounded-xl shadow-xl bg-zinc-300 dark:bg-zinc-700 ">
          <textarea
            className="w-full p-3 dark:text-white focus:outline-none"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            rows={2}
          />
          <div className="flex items-center justify-between p-2">
            <input
              type="file"
              onChange={(event) => {
                if (event.target.files) {
                  setFiles(event.target.files);
                }
              }}
              multiple
              ref={fileInputRef}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="px-4 py-2 bg-gray-700 text-white rounded-full shadow cursor-pointer hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              Upload Files
            </label>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              <SendHorizontal size={24} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
