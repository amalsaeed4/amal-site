import { Terminal } from "@/components/Terminal";
import { ThemeToggle } from "@/components/ThemeToggle";

const EMAIL = "amalsaeedwork@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/amal-saeed-swe";
const GITHUB = "https://github.com/amalsaeed4";

const caseStudies = [
  {
    tag: "growth",
    color: "bg-lilac",
    title: "University onboarding",
    problem:
      "Students were signing up without a school, so we couldn't show them their classes or launch campus by campus.",
    built:
      "School binding, a school-scoped course catalog with public shareable class pages, sign-up attribution, and .edu email verification, end to end across Next.js and FastAPI.",
    result: [
      { stat: "86%", label: "of new sign-ups tied to a school" },
      { stat: "89%", label: "of .edu verification codes completed" },
    ],
  },
  {
    tag: "ai",
    color: "bg-pink",
    title: "AI study suggestions",
    problem:
      "Students would open felixx and stare at an empty chat box, not sure what to ask about their own class.",
    built:
      "Personalized suggested questions on the home screen and follow-up suggestions after every answer, generated from each student's real course content on our Gemini-powered RAG service, with timeouts and graceful fallbacks so it never breaks the chat.",
    result: [{ stat: "✦", label: "flashcard + quiz prompts built right into the suggestions" }],
  },
  {
    tag: "integrations",
    color: "bg-mint",
    title: "Canvas course sync",
    problem:
      "Students' classes changed every semester, and a sync bug was quietly dropping classes and deleting folders people had made by hand.",
    built:
      "A course-sync lifecycle that detects, archives, and restores courses, plus fixes for the dropped-class and deleted-folder bugs.",
    result: [
      { stat: "20k+", label: "course items synced" },
      { stat: "400+", label: "classes" },
    ],
  },
];

const alsoBuilt = [
  "referral + growth-partner dashboard",
  "lifecycle emails (1,700+ sent)",
  "document viewer",
  "subscriptions + billing",
  "marketing site",
];

const projects = [
  {
    emoji: "🔍",
    title: "IP Discovery Tool",
    blurb:
      "Privacy-first desktop app that scans codebases for patentable IP with local LLMs, so proprietary code never leaves the machine.",
    tags: ["local LLMs", "structured outputs", "senior capstone"],
    color: "bg-sky",
  },
  {
    emoji: "⚽",
    title: "Soccer Robotics Scoreboard",
    blurb:
      "Real-time scoring backend with sub-second updates and OBS overlays for robotics matches streamed on Twitch.",
    tags: ["Nuxt", "Prisma", "real-time"],
    color: "bg-butter",
  },
  {
    emoji: "🚗",
    title: "CarMatch",
    blurb:
      "Vehicle search with Gemini-powered recommendations and a data layer feeding a Unity VR viewer.",
    tags: ["Gemini", "full-stack", "hackathon"],
    color: "bg-pink",
    href: "https://devpost.com/software/carmatch-w0zn4h",
  },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-sm text-lilac-deep">{kicker}</p>
      <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border-2 border-ink/80 bg-paper px-2.5 py-0.5 font-mono text-[11px] dark:border-night-line dark:bg-night">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="dots min-h-screen">
      {/* nav */}
      <header className="sticky top-0 z-20 border-b-2 border-ink/10 bg-cream/80 backdrop-blur dark:border-night-line dark:bg-night/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="font-mono text-sm font-semibold">
            amal<span className="text-lilac-deep">.</span>saeed<span className="text-pink">()</span>
          </a>
          <div className="flex items-center gap-4 font-mono text-sm sm:gap-6">
            <a href="#work" className="hidden hover:text-lilac-deep sm:inline">work</a>
            <a href="#projects" className="hidden hover:text-lilac-deep sm:inline">projects</a>
            <a href="#about" className="hidden hover:text-lilac-deep sm:inline">about</a>
            <a href="#contact" className="hover:text-lilac-deep">contact</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* hero */}
        <section className="relative grid items-center gap-12 py-16 sm:py-24 md:grid-cols-[1.1fr_1fr]">
          <span className="float pointer-events-none absolute -top-2 right-4 text-3xl text-pink [--r:12deg]" aria-hidden>✦</span>
          <span className="float pointer-events-none absolute bottom-6 left-1/2 text-2xl text-mint [--r:-10deg] [animation-delay:1.2s]" aria-hidden>★</span>

          <div>
            <span className="sticker inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1 font-mono text-xs dark:bg-night-card">
              <span className="h-2 w-2 rounded-full bg-[#1fa971]" /> open to SWE roles
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              hey, i&apos;m Amal <span className="wave">👋</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted dark:text-[#b7b0d4]">
              Software engineer who likes building products people actually use, end to end, from
              the database to the{" "}
              <span className="rounded bg-butter px-1 text-ink">pixels</span>.
            </p>
            <p className="mt-3 max-w-md text-muted dark:text-[#b7b0d4]">
              Right now I&apos;m building{" "}
              <a href="https://felixx.app" className="font-semibold text-lilac-deep underline decoration-2 underline-offset-4">
                felixx
              </a>
              , the study platform that actually knows your class.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="sticker sticker-hover rounded-xl bg-lilac px-5 py-2.5 font-semibold text-ink">
                say hi ✿
              </a>
              <a href={LINKEDIN} className="sticker sticker-hover rounded-xl bg-paper px-5 py-2.5 font-semibold dark:bg-night-card">
                LinkedIn
              </a>
              <a href={GITHUB} className="sticker sticker-hover rounded-xl bg-paper px-5 py-2.5 font-semibold dark:bg-night-card">
                GitHub
              </a>
            </div>
          </div>

          <div className="md:rotate-1">
            <Terminal />
          </div>
        </section>

        {/* work */}
        <section id="work" className="scroll-mt-20 py-16">
          <SectionTitle kicker="// work" title="What I've built at felixx" />

          <div className="sticker mb-8 flex flex-col gap-4 rounded-2xl bg-paper p-5 sm:flex-row sm:items-center sm:justify-between dark:bg-night-card">
            <div>
              <p className="text-lg font-bold">Software Engineer, Product · felixx</p>
              <p className="text-sm text-muted dark:text-[#b7b0d4]">
                AI study platform for college students
              </p>
            </div>
            <p className="font-mono text-sm text-muted dark:text-[#b7b0d4]">Jun 2025 → now</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((c) => (
              <article key={c.title} className="sticker sticker-hover flex flex-col rounded-2xl bg-paper p-5 dark:bg-night-card">
                <span className={`self-start rounded-full ${c.color} px-2.5 py-0.5 font-mono text-[11px] font-semibold text-ink`}>
                  {c.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold leading-snug">{c.title}</h3>
                <dl className="mt-3 space-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-[#9f97c2]">problem</dt>
                    <dd className="mt-0.5">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-[#9f97c2]">what i built</dt>
                    <dd className="mt-0.5">{c.built}</dd>
                  </div>
                </dl>
                <div className="mt-auto flex flex-wrap gap-4 border-t-2 border-dashed border-ink/15 pt-4 dark:border-night-line">
                  {c.result.map((r) => (
                    <div key={r.label}>
                      <p className="text-2xl font-bold text-lilac-deep">{r.stat}</p>
                      <p className="max-w-[11rem] text-xs text-muted dark:text-[#b7b0d4]">{r.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="font-mono text-sm text-muted dark:text-[#b7b0d4]">also built:</span>
            {alsoBuilt.map((a) => (
              <Chip key={a}>{a}</Chip>
            ))}
          </div>
        </section>

        {/* projects */}
        <section id="projects" className="scroll-mt-20 py-16">
          <SectionTitle kicker="// projects" title="Things I've made" />
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => {
              const card = (
                <>
                  <div className={`grid h-12 w-12 place-items-center rounded-xl border-2 border-ink ${p.color} text-2xl dark:border-night-line`}>
                    {p.emoji}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">
                    {p.title}
                    {p.href && <span className="ml-1.5 text-base text-lilac-deep">↗</span>}
                  </h3>
                  <p className="mt-2 text-sm text-muted dark:text-[#b7b0d4]">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </>
              );
              const cls = "sticker sticker-hover block rounded-2xl bg-paper p-5 dark:bg-night-card";
              return p.href ? (
                <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className={cls}>
                  {card}
                </a>
              ) : (
                <div key={p.title} className={cls}>
                  {card}
                </div>
              );
            })}
            <div className="grid place-items-center rounded-2xl border-2 border-dashed border-ink/30 p-8 text-center dark:border-night-line">
              <div>
                <p className="font-mono text-sm text-muted dark:text-[#b7b0d4]">
                  next_project.exe <span className="caret">▍</span>
                </p>
                <p className="mt-1 text-sm text-muted dark:text-[#b7b0d4]">loading… something new is shipping soon 👀</p>
              </div>
            </div>
          </div>
        </section>

        {/* about */}
        <section id="about" className="scroll-mt-20 py-16">
          <SectionTitle kicker="// about" title="A little about me" />
          <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
            <div className="sticker rounded-2xl bg-paper p-6 text-[15px] leading-relaxed dark:bg-night-card">
              <p>
                I studied Software Engineering at UT Dallas and spent most of the last year at felixx, an early-stage
                edtech startup, where I&apos;ve gotten to own whole features: from the database schema and the
                AI behind them to the onboarding screens students actually see.
              </p>
              <p className="mt-4">
                I like the product side of engineering most: figuring out what people actually need, shipping it
                fast, and checking the numbers to see if it worked. Lately I&apos;ve also been doing felixx&apos;s
                brand and design, which is how this site ended up with stickers.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                ["🎓", "B.S. Software Engineering, UT Dallas '26"],
                ["🏆", "WEHack 2023 winner (Major League Hacking sponsor challenge)"],
                ["🏛️", "Student Government senator for the engineering school"],
                ["🤝", "Student mentor, Society of Women Engineers"],
                ["🌎", "Open to remote, hybrid, or relocating"],
              ].map(([icon, text]) => (
                <li key={text} className="sticker flex items-center gap-3 rounded-xl bg-paper px-4 py-3 text-sm dark:bg-night-card">
                  <span className="text-lg">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="scroll-mt-20 py-16">
          <div className="sticker relative overflow-hidden rounded-3xl bg-lilac p-8 text-ink sm:p-12 dark:bg-lilac-deep dark:text-white">
            <span className="float pointer-events-none absolute right-8 top-6 text-4xl [--r:-8deg]" aria-hidden>✿</span>
            <p className="font-mono text-sm opacity-70">{"// contact"}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">let&apos;s build something cool</h2>
            <p className="mt-3 max-w-lg opacity-80">
              I&apos;m looking for software engineering roles, especially on product-focused teams. My
              inbox is open.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="sticker sticker-hover rounded-xl bg-paper px-5 py-2.5 font-mono text-sm font-semibold text-ink">
                {EMAIL}
              </a>
              <a href={LINKEDIN} className="sticker sticker-hover rounded-xl bg-butter px-5 py-2.5 font-semibold text-ink">
                LinkedIn ↗
              </a>
              <a href={GITHUB} className="sticker sticker-hover rounded-xl bg-mint px-5 py-2.5 font-semibold text-ink">
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-4 pb-10 pt-4 font-mono text-xs text-muted sm:px-6 dark:text-[#9f97c2]">
        built with next.js + tailwind ✦ © 2026 amal saeed
      </footer>
    </div>
  );
}
