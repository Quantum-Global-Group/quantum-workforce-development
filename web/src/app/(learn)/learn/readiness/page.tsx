import LearnPageHeader from "@/components/learn/LearnPageHeader";
import { LearnButton } from "@/components/learn/LearnButton";
import ReadinessTrack from "@/components/learn/ReadinessTrack";
import { NAVIGATOR_HREF } from "@/lib/curriculum";

export default function ReadinessPage() {
  return (
    <div className="space-y-10">
      <LearnPageHeader
        eyebrow="Optional · Skills check"
        title="Quantum Readiness Track"
        subtitle="A shorter skills-focused complement to the Career Navigator. Most learners can skip this and go straight to Classroom."
        showJourney
      >
        <LearnButton href={NAVIGATOR_HREF} variant="secondary">
          Back to Navigator
        </LearnButton>
      </LearnPageHeader>
      <p className="max-w-3xl text-sm text-ql-on-surface-variant">
        The primary entry point for new learners is the{" "}
        <a href={NAVIGATOR_HREF} className="text-ql-primary">
          Quantum Career Navigator
        </a>
        . Use this eight-pathway assessment as the complement when you want a shorter, skills-focused check.
      </p>
      <ReadinessTrack />
    </div>
  );
}
