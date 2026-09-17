import type { Metadata } from "next";

import LearnShell from "@/components/learn/LearnShell";

export const metadata: Metadata = {
  title: "Learn · Quantum Global Group",
  description:
    "Quantum Global Group workforce learning: Career Navigator, Readiness Track, Quantum Classroom, and Portfolio Lab — find your pathway, build skills, and apply what you learn.",
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <LearnShell>{children}</LearnShell>;
}
