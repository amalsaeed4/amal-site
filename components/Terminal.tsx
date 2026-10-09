"use client";

import { useEffect, useState } from "react";

const LINES: { cmd: string; out: string }[] = [
  { cmd: "whoami", out: "amal saeed, software engineer" },
  { cmd: "cat now.txt", out: "building @ felixx (edtech)" },
  { cmd: "ls interests/", out: "product  ai  growth  design" },
  { cmd: "echo $STATUS", out: "open to SWE roles ✿" },
];

// Character offset where each command starts in the overall typing sequence.
const STARTS = LINES.map((_, i) => LINES.slice(0, i).reduce((n, l) => n + l.cmd.length, 0));
const TOTAL = LINES.reduce((n, l) => n + l.cmd.length, 0);

function Caret() {
  return <span className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-pink" />;
}

export function Terminal() {
  // Number of characters typed so far across all commands.
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (typed >= TOTAL) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = setTimeout(
      () => setTyped((t) => (reduced ? TOTAL : t + 1)),
      reduced ? 0 : typed === 0 ? 500 : 55,
    );
    return () => clearTimeout(id);
  }, [typed]);

  return (
    <div className="sticker rounded-2xl bg-ink text-[13px] text-[#ece8ff] dark:bg-night-card">
      <div className="flex items-center gap-1.5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-pink" />
        <span className="h-3 w-3 rounded-full bg-butter" />
        <span className="h-3 w-3 rounded-full bg-mint" />
        <span className="ml-3 font-mono text-xs text-white/40">~/amal</span>
      </div>
      <div className="min-h-[13.5rem] space-y-2 px-5 pb-5 pt-1 font-mono leading-relaxed">
        {LINES.map((line, i) => {
          const progress = typed - STARTS[i];
          if (progress < 0) return null;
          const shown = Math.min(line.cmd.length, progress);
          const done = progress >= line.cmd.length;
          return (
            <div key={line.cmd}>
              <div>
                <span className="text-mint">➜</span> <span className="text-lilac">~</span>{" "}
                {line.cmd.slice(0, shown)}
                {!done && <Caret />}
              </div>
              {done && <div className="text-white/70">{line.out}</div>}
            </div>
          );
        })}
        {typed >= TOTAL && (
          <div>
            <span className="text-mint">➜</span> <span className="text-lilac">~</span> <Caret />
          </div>
        )}
      </div>
    </div>
  );
}
