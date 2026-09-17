import type { ReactNode } from "react";

import JourneyProgress from "./JourneyProgress";

export default function LearnPageHeader({
  eyebrow,
  title,
  subtitle,
  children,
  showJourney = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  showJourney?: boolean;
}) {
  return (
    <header className="space-y-8">
      <div className="max-w-3xl space-y-4">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-ql-primary">{eyebrow}</p>
        ) : null}
        <h1 className="font-headline text-4xl font-bold tracking-tight text-ql-on-surface sm:text-5xl">
          {title}
        </h1>
        {subtitle ? <p className="text-lg leading-relaxed text-ql-on-surface-variant">{subtitle}</p> : null}
        {children ? <div className="flex flex-wrap gap-3 pt-1">{children}</div> : null}
      </div>
      {showJourney ? <JourneyProgress /> : null}
    </header>
  );
}
