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
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left scale-x-0 bg-gradient-to-r from-lilac-deep via-pink to-mint"
      aria-hidden
    />
  );
}

/** Little sparkles that trail the cursor (mouse only, off for reduced motion). */
function SparkleTrail() {
  useEffect(() => {
    if (reducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;
    const glyphs = ["✦", "✧", "⋆", "✿"];
    const colors = ["#7c5cff", "#ff9ccf", "#8fe3c4", "#ffd35c"];
    let last = 0;

    function onMove(e: MouseEvent) {
      const now = performance.now();
      if (now - last < 45) return;
      last = now;
      const s = document.createElement("span");
      s.className = "sparkle";
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      s.style.left = `${e.clientX}px`;
      s.style.top = `${e.clientY}px`;
      s.style.color = colors[Math.floor(Math.random() * colors.length)];
      s.style.setProperty("--dx", `${(Math.random() - 0.5) * 30}px`);
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 800);
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
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
      <SparkleTrail />
      <Konami />
    </>
  );
}
