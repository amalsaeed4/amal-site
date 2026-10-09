"use client";

import { useEffect, useRef, useState } from "react";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Gradient bar across the top that fills as you scroll. */
function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${pct})`;
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={bar}
      style={{ transform: "scaleX(0)" }}
      className="fixed inset-x-0 top-0 z-50 h-1.5 origin-left bg-gradient-to-r from-lilac-deep via-pink to-mint"
      aria-hidden
    />
  );
}

/** ↑↑↓↓←→←→BA toggles party mode. */
function Konami() {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let pos = 0;
    let hide: ReturnType<typeof setTimeout>;

    function onKey(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
      if (pos === code.length) {
        pos = 0;
        const on = document.documentElement.classList.toggle("party");
        setToast(on ? "🎉 party mode unlocked" : "party's over ✿");
        clearTimeout(hide);
        hide = setTimeout(() => setToast(null), 2200);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(hide);
    };
  }, []);

  if (!toast) return null;
  return (
    <div className="sticker fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-butter px-4 py-2 font-mono text-sm text-ink">
      {toast}
    </div>
  );
}

export function Effects() {
  return (
    <>
      <ScrollProgress />
      <Konami />
    </>
  );
}
