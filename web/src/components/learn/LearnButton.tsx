import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ql-primary";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: `${base} bg-ql-primary text-ql-on-primary hover:brightness-110`,
  secondary: `${base} border border-ql-outline-variant bg-transparent text-ql-on-surface hover:border-ql-primary hover:text-ql-primary`,
  ghost: `${base} border border-transparent bg-ql-surface-container/60 text-ql-on-surface-variant hover:text-ql-on-surface`,
};

export function LearnButton({
  href,
  variant = "primary",
  children,
  className = "",
  external,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cn = `${variants[variant]} ${className}`;
  if (external || href.startsWith("http")) {
    return (
      <a href={href} className={cn} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }
  if (href.startsWith("/learn/navigator")) {
    return (
      <a href={href} className={cn}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn}>
      {children}
    </Link>
  );
}
