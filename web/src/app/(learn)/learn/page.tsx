import Link from "next/link";

import LearnPageHeader from "@/components/learn/LearnPageHeader";
import { LearnButton } from "@/components/learn/LearnButton";
import ProgramStageCard, { SectionHeader } from "@/components/learn/ProgramStageCard";
import { COURSES, PATHWAY_LIST, PROGRAM } from "@/lib/curriculum";

export default function LearnHomePage() {
  return (
    <div className="space-y-16">
      <LearnPageHeader
        eyebrow="Quantum Readiness Month · Workforce development"
        title="Find Your Pathway Into Quantum"
        subtitle="Start with where you fit, learn the fundamentals, then turn what you learn into something real."
        showJourney
      >
        <LearnButton href="/learn/navigator">Find My Quantum Path</LearnButton>
        <LearnButton href="#journey" variant="secondary">
          Explore the Learning Journey
        </LearnButton>
      </LearnPageHeader>

      <section id="journey" className="space-y-6">
        <SectionHeader
          title="Your guided path"
          description="One progression. New here? Start with the Career Navigator."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <ProgramStageCard
            step="01"
            title="Quantum Career Navigator"
            description="Find where your skills, interests, and goals fit in the quantum ecosystem."
            cta="Find My Path"
            href="/learn/navigator"
            emphasized
          />
          <ProgramStageCard
            step="02"
            title="Quantum Classroom"
            description="Learn the concepts, tools, and fundamentals connected to your pathway."
            cta="Start Learning"
            href="/learn/classroom"
          />
          <ProgramStageCard
            step="03"
            title="Portfolio Lab"
            description="Apply your learning through projects, case studies, and portfolio-ready work."
            cta="Build Something"
            href="/dashboard"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-ql-outline-variant bg-ql-surface-low p-6 sm:p-8">
        <SectionHeader
          title="What is this program?"
          description={PROGRAM.promise}
        />
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-ql-primary">Who it&apos;s for</dt>
            <dd className="mt-1 text-sm text-ql-on-surface-variant">{PROGRAM.audience}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-ql-primary">Duration</dt>
            <dd className="mt-1 text-sm text-ql-on-surface-variant">{PROGRAM.duration}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-bold uppercase tracking-wider text-ql-primary">Where to start</dt>
            <dd className="mt-1 text-sm text-ql-on-surface-variant">
              Open the{" "}
              <a href="/learn/navigator" className="text-ql-primary">
                Quantum Career Navigator
              </a>
              , then continue with Classroom and Portfolio Lab.
            </dd>
          </div>
        </dl>
      </section>

      <section className="space-y-6">
        <SectionHeader
          title="Four-week journey"
          description="One course per week. Week 1 centers on pathway discovery; later weeks build intuition, business context, and measurable baselines."
        />
        <ol className="grid gap-4 md:grid-cols-2">
          {COURSES.map((course) => (
            <li key={course.slug}>
              <Link
                href={`/learn/courses/${course.slug}`}
                className="block h-full rounded-xl border border-ql-outline-variant bg-ql-surface-low p-5 no-underline shadow-sm transition-colors hover:border-ql-primary"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-ql-primary">
                  Week {course.week} · {course.code}
                </p>
                <h3 className="mt-2 font-headline text-xl font-bold text-ql-on-surface">{course.title}</h3>
                <p className="mt-2 text-sm text-ql-on-surface-variant">{course.subtitle}</p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-6">
        <SectionHeader
          title="Quantum workforce pathways"
          description="Eight practical pathways — from applied domain work to software, security, business, and education."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PATHWAY_LIST.map((pathway) => (
            <Link
              key={pathway.id}
              href={`/learn/roles#${pathway.id}`}
              className="rounded-xl border border-ql-outline-variant bg-ql-surface-low p-4 no-underline hover:border-ql-primary"
            >
              <h3 className="font-headline text-base font-bold text-ql-on-surface">{pathway.shortName}</h3>
              <p className="mt-2 text-sm text-ql-on-surface-variant">{pathway.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-ql-primary/40 bg-ql-primary/10 p-8 text-center">
        <h2 className="font-headline text-2xl font-bold text-ql-on-surface">Ready to find your place?</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ql-on-surface-variant">
          The Career Navigator is the best first step if you are asking: &ldquo;Where do I fit in quantum?&rdquo;
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LearnButton href="/learn/navigator">Find My Quantum Path</LearnButton>
          <LearnButton href="/learn/classroom" variant="secondary">
            Start Learning
          </LearnButton>
        </div>
      </section>
    </div>
  );
}
