import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-999 w-full p-4 text-white bg-zinc-800">
      <div className="flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <h1 className="text-xl font-bold">
          <Link href="/" className="flex items-center gap-2">
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
      </div>
    </header>
  );
}
