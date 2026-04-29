"use client";

import Link from "next/link";

type SiteChromeProps = {
  children: React.ReactNode;
};

export default function SiteChrome({ children }: SiteChromeProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            hankjensen.com
          </Link>
        </div>
      </header>

      <div className="flex-1">{children}</div>
    </div>
  );
}
