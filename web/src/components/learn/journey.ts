/** Guided product journey — one progression for public learners. */
export const LEARN_JOURNEY = [
  {
    step: "01",
    id: "navigator",
    label: "Navigator",
    question: "Where do I fit in quantum?",
    href: "/learn/navigator",
    staticPage: true as const,
  },
  {
    step: "02",
    id: "classroom",
    label: "Classroom",
    question: "Teach me the fundamentals.",
    href: "/learn/classroom",
  },
  {
    step: "03",
    id: "portfolio",
    label: "Portfolio Lab",
    question: "Build something I can show.",
    href: "/dashboard",
  },
] as const;

export type JourneyStageId = (typeof LEARN_JOURNEY)[number]["id"];

export function activeJourneyStage(pathname: string): JourneyStageId | null {
  if (pathname === "/learn" || pathname.startsWith("/learn/navigator")) return "navigator";
  if (pathname.startsWith("/learn/classroom") || pathname.startsWith("/learn/courses")) {
    return "classroom";
  }
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/quantum")) return "portfolio";
  return null;
}
