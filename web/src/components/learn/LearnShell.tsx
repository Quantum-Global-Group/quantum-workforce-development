"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

import JourneyProgress from "./JourneyProgress";

const NAV = [
  { href: "/learn", label: "Program" },
  { href: "/learn/navigator", label: "Navigator", staticPage: true, emphasize: true },
  { href: "/learn/readiness", label: "Readiness" },
  { href: "/learn/classroom", label: "Classroom" },
  { href: "/learn/roles", label: "Roles" },
  { href: "/learn/courses", label: "Courses" },
  { href: "/dashboard", label: "Portfolio Lab" },
  { href: "/learn/next", label: "Next Steps" },
];

export default function LearnShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-ql-canvas text-ql-on-surface">
      <header className="sticky top-0 z-20 border-b border-ql-outline-variant/80 bg-ql-surface-low/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/learn" className="no-underline">
              <p className="font-headline text-[11px] font-bold uppercase tracking-[0.22em] text-ql-primary">
                Quantum Global Group
              </p>
              <p className="font-headline text-lg font-bold tracking-tight text-ql-on-surface">
                Quantum for the Qulture
              </p>
            </Link>
            <nav className="flex flex-wrap items-center gap-1" aria-label="Learning platform">
              {NAV.map((item) => {
                const active =
                  item.href === "/learn"
                    ? pathname === "/learn"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                const className = `rounded-lg px-3 py-1.5 text-sm font-medium no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ql-primary ${
                  active
                    ? "bg-ql-surface-container text-ql-primary"
                    : "text-ql-on-surface-variant hover:bg-ql-surface-container hover:text-ql-on-surface"
                } ${item.emphasize && !active ? "text-ql-on-surface" : ""}`;
                if ("staticPage" in item && item.staticPage) {
                  return (
                    <a key={item.href} href={item.href} className={className}>
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link key={item.href} href={item.href} className={className}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="mt-3 hidden border-t border-ql-outline-variant/60 pt-3 lg:block">
            <JourneyProgress compact />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">{children}</main>
      <footer className="border-t border-ql-outline-variant px-4 py-10 text-sm text-ql-on-surface-variant sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-headline text-base font-bold text-ql-on-surface">Quantum Global Group</p>
            <p className="mt-1 text-ql-on-surface-variant">Quantum for the Qulture</p>
            <p className="mt-3 max-w-sm text-sm italic text-ql-on-surface-variant">
              Learn the math. See the quantum. Find your pathway.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/learn" className="text-ql-on-surface-variant no-underline hover:text-ql-primary">
              Program
            </Link>
            <a href="/learn/navigator" className="text-ql-on-surface-variant no-underline hover:text-ql-primary">
              Navigator
            </a>
            <Link href="/learn/readiness" className="text-ql-on-surface-variant no-underline hover:text-ql-primary">
              Readiness
            </Link>
            <Link href="/learn/classroom" className="text-ql-on-surface-variant no-underline hover:text-ql-primary">
              Classroom
            </Link>
            <a
              href="https://www.quantumglobalgroup.io/"
              className="text-ql-on-surface-variant no-underline hover:text-ql-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Quantum Global Group
            </a>
            <a
              href="https://github.com/Quantum-Global-Group/quantum-workforce-development"
              className="text-ql-on-surface-variant no-underline hover:text-ql-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
