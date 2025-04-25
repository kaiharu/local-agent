import Header from "@/components/layout/Header";
import Nav from "@/components/layout/Nav";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Local AI Agent",
  description: "This is a AI Agent only for YOU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex items-start bg-zinc-800">
          <Nav />
          <div className="relative h-screen w-full grow overflow-y-auto">
            <Header />
            <main className="relative box-border flex min-h-[calc(100vh-81px)] w-full justify-center p-4">
              <div className="w-full max-w-[1200px] rounded-lg p-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
