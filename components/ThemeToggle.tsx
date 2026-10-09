"use client";

import { useSyncExternalStore } from "react";

// Reads the theme straight from the <html> class so it stays in sync with the
// pre-paint script in layout.tsx.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.classList.contains("dark");

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="sticker sticker-hover grid h-9 w-9 place-items-center rounded-full bg-butter text-base dark:bg-night-card"
    >
      {dark ? "☾" : "☀"}
    </button>
  );
}
