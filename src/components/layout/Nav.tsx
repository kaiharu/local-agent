"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen transition-all ${
        isOpen ? "w-[280px]" : "w-16"
      } border-r border-zinc-600 bg-zinc-900 p-4 text-gray-900`}
    >
      <button
        className="mb-4 rounded p-2 text-white hover:bg-zinc-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={isOpen ? "block" : "hidden"}>
        <ul>
          <li className="mb-2 px-4 py-2 rounded-md hover:bg-zinc-600">
            <Link href="/" className="text-white">
              New Chat
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen transition-all ${
        isOpen ? "w-[280px]" : "w-16"
      } bg-zinc-900 p-4 text-white`}
    >
      <button
        className="mb-4 rounded bg-zinc-700 p-2 hover:bg-zinc-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={isOpen ? "block" : "hidden"}>
        <ul>
          <li className="mb-2">
            <Link href="/admin" className="block rounded p-2 hover:bg-zinc-700">
              ダッシュボード
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/admin/info"
              className="block rounded p-2 hover:bg-zinc-700"
            >
              新着通知・メール送信
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/admin/square"
              className="block rounded p-2 hover:bg-zinc-700"
            >
              いけんひろば管理
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
