"use client";

import { useState } from "react";

const CONFETTI_COLORS = ["#7c5cff", "#ff9ccf", "#8fe3c4", "#ffd35c", "#9fd3ff"];

/** A floating sticker that bursts into confetti when you click it, then grows back. */
export function PopSticker({
  glyph,
  className = "",
  label = "pop me",
}: {
  glyph: string;
  className?: string;
  label?: string;
}) {
  const [popped, setPopped] = useState(false);

  function pop(e: React.MouseEvent<HTMLButtonElement>) {
    if (popped) return;
    setPopped(true);
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) {
      for (let i = 0; i < 18; i++) {
        const bit = document.createElement("span");
        bit.className = "confetti";
        const angle = (Math.PI * 2 * i) / 18 + Math.random() * 0.4;
        const dist = 50 + Math.random() * 50;
        bit.style.left = `${cx}px`;
        bit.style.top = `${cy}px`;
        bit.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        bit.style.setProperty("--x", `${Math.cos(angle) * dist}px`);
        bit.style.setProperty("--y", `${Math.sin(angle) * dist}px`);
        bit.style.setProperty("--rot", `${Math.random() * 360}deg`);
        document.body.appendChild(bit);
        setTimeout(() => bit.remove(), 900);
      }
    }
    setTimeout(() => setPopped(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={pop}
      aria-label={label}
      title={label}
      className={`absolute cursor-pointer select-none transition-transform duration-300 hover:scale-125 ${
        popped ? "scale-0" : "scale-100"
      } ${className}`}
    >
      <span className="float inline-block">{glyph}</span>
    </button>
  );
}

/** Copies the email and shows a little toast. */
export function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <span className="relative inline-block">
      <button type="button" onClick={copy} className={className}>
        {email} <span aria-hidden>⧉</span>
      </button>
      <span
        role="status"
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 font-mono text-xs text-white transition-all duration-200 ${
          copied ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        copied! ✿
      </span>
    </span>
  );
}
