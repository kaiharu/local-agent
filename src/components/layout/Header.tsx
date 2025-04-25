import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between p-4 text-white bg-zinc-800">
      <h1 className="text-xl font-bold">
        <Link href="/" className="hover:underline flex items-center gap-2">
          <Image
            aria-hidden
            src="/logo.png"
            alt="Logo icon"
            width={40}
            height={40}
          />
          Local AI Agent
        </Link>
      </h1>
    </header>
  );
}
