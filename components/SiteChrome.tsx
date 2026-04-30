"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteChromeProps = {
  children: React.ReactNode;
};

const labelMap: Record<string, string> = {
  jesus: "Jesus Christ",
  "jesus-christ": "Jesus Christ",
  "love-and-truth": "Love and Truth",
  "logic-and-reason": "Logic and Reason",
  "creation-vs-evolution": "Creation vs Evolution",
  "other-worldviews": "Other Worldviews",
  "life-and-culture": "Life and Culture",
  "biblical-case": "Biblical Case for a Global Flood"
};

function toReadableLabel(segment: string) {
  if (labelMap[segment]) {
    return labelMap[segment];
  }

  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => ({
    href: `/${segments.slice(0, index + 1).join("/")}`,
    label: toReadableLabel(segment),
    isLast: index === segments.length - 1
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="site-header-inner mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {isHome ? (
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              hankjensen.com
            </Link>
          ) : (
            <nav className="flex flex-wrap items-center justify-center gap-y-1 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              {breadcrumbs.map((crumb) => (
                <span key={`${crumb.href}-${crumb.label}`}>
                  <span className="mx-2">&gt;</span>
                  {crumb.isLast ? (
                    <span className="font-semibold text-slate-900">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-slate-900">
                      {crumb.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          )}
        </div>
      </header>

      <div className="flex-1">{children}</div>
    </div>
  );
}
