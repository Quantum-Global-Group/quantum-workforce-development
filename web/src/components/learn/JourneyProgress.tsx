"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { activeJourneyStage, LEARN_JOURNEY } from "./journey";

export default function JourneyProgress({ compact }: { compact?: boolean }) {
  const pathname = usePathname() ?? "";
  const active = activeJourneyStage(pathname);

  return (
    <nav
      aria-label="Learning journey"
      className={
        compact
          ? "flex flex-wrap gap-2"
          : "grid gap-2 sm:grid-cols-3"
      }
    >
      {LEARN_JOURNEY.map((stage) => {
        const isActive = active === stage.id;
        const className = `group rounded-xl border px-4 py-3 no-underline transition-colors ${
          isActive
            ? "border-ql-primary bg-ql-primary/10"
            : "border-ql-outline-variant bg-ql-surface-low/80 hover:border-ql-primary/50"
        }`;
        const inner = (
          <>
            <p className="font-mono text-xs font-medium text-ql-primary">{stage.step}</p>
            <p className="font-headline text-sm font-bold text-ql-on-surface">{stage.label}</p>
            {!compact ? (
              <p className="mt-1 text-xs text-ql-on-surface-variant">{stage.question}</p>
            ) : null}
          </>
        );
        if ("staticPage" in stage && stage.staticPage) {
          return (
            <a key={stage.id} href={stage.href} className={className}>
              {inner}
            </a>
          );
        }
        return (
          <Link key={stage.id} href={stage.href} className={className}>
            {inner}
          </Link>
        );
      })}
    </nav>
  );
}
