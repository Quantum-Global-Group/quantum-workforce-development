import type { ReactNode } from "react";

import { LearnButton } from "./LearnButton";

export default function ProgramStageCard({
  step,
  title,
  description,
  cta,
  href,
  emphasized,
  external,
}: {
  step: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  emphasized?: boolean;
  external?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm ${
        emphasized
          ? "border-ql-primary bg-gradient-to-br from-ql-primary/15 to-ql-surface-low ring-1 ring-ql-primary/30"
          : "border-ql-outline-variant bg-ql-surface-low"
      }`}
    >
      <p className="font-mono text-sm font-semibold text-ql-primary">{step}</p>
      <h3 className="mt-2 font-headline text-xl font-bold text-ql-on-surface">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ql-on-surface-variant">{description}</p>
      <div className="mt-6">
        <LearnButton href={href} variant={emphasized ? "primary" : "secondary"} external={external}>
          {cta}
        </LearnButton>
      </div>
    </article>
  );
}

export function SectionHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <h2 className="font-headline text-2xl font-bold text-ql-on-surface sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-ql-on-surface-variant">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
