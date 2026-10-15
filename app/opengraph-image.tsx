import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Link preview card (iMessage, Slack, LinkedIn, etc.). Mirrors the hero in dark mode.
export const alt = "hey, i'm Amal. Software engineer building products people actually use.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (file: string) => readFile(join(process.cwd(), "assets", file));

const INK = "#1f1b2e";
const NIGHT = "#13111c";
const NIGHT_CARD = "#1d1a2a";
const NIGHT_LINE = "#2e2a42";
const LILAC_DEEP = "#7c5cff";

const flower = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="#fbf7f1">${[0, 72, 144, 216, 288]
  .map((r) => `<ellipse cx="16" cy="9.6" rx="4.2" ry="5.4" transform="rotate(${r} 16 16)"/>`)
  .join("")}</g><circle cx="16" cy="16" r="3.4" fill="#ffe08a"/></svg>`)}`;

const sparkle = (color: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" fill="${color}"/></svg>`)}`;

const LINES = [
  { cmd: "whoami", out: "amal saeed, software engineer" },
  { cmd: "cat now.txt", out: "building @ felixx (edtech)" },
  { cmd: "ls interests/", out: "product  ai  growth  design" },
];

const TAGLINE = "Software engineer building products people actually use, from the database to the";

const sticker = { border: `3px solid ${NIGHT_LINE}`, boxShadow: `6px 6px 0 0 ${LILAC_DEEP}` };

export default async function Image() {
  const [bold, medium, mono] = await Promise.all([
    font("SpaceGrotesk-Bold.ttf"),
    font("SpaceGrotesk-Medium.ttf"),
    font("JetBrainsMono-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          gap: 56,
          background: NIGHT,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 2px, transparent 2px)",
          backgroundSize: "30px 30px",
          fontFamily: "Grotesk",
          color: "#ece8ff",
          position: "relative",
        }}
      >
        <img alt="" src={sparkle("#ff9ccf")} width={52} height={52} style={{ position: "absolute", top: 46, right: 70 }} />
        <img alt="" src={sparkle("#8fe3c4")} width={36} height={36} style={{ position: "absolute", bottom: 52, left: 560 }} />
        <img alt="" src={sparkle("#7c5cff")} width={28} height={28} style={{ position: "absolute", top: 70, left: 610 }} />

        {/* left: intro */}
        <div style={{ display: "flex", flexDirection: "column", width: 560 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                ...sticker,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 18,
                background: "#7c5cff",
              }}
            >
              <img alt="" src={flower} width={44} height={44} />
            </div>
          </div>

          <div style={{ marginTop: 34, fontSize: 92, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            hey, i&apos;m Amal
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", columnGap: 9, marginTop: 26, fontSize: 32, lineHeight: 1.4, color: "#b7b0d4" }}>
            {TAGLINE.split(" ").map((w, i) => (
              <span key={i}>{w}</span>
            ))}
            <span style={{ background: "#ffe08a", color: INK, padding: "0 8px", borderRadius: 6 }}>pixels</span>
          </div>

          <div style={{ marginTop: 34, fontFamily: "Mono", fontSize: 26, color: "#b9a5ff" }}>amalsaeed.me</div>
        </div>

        {/* right: terminal sticker */}
        <div style={{ display: "flex", position: "relative", transform: "rotate(2deg)" }}>
          <div
            style={{
              ...sticker,
              boxShadow: `8px 8px 0 0 ${LILAC_DEEP}`,
              display: "flex",
              flexDirection: "column",
              width: 440,
              borderRadius: 26,
              background: NIGHT_CARD,
              color: "#ece8ff",
              fontFamily: "Mono",
              fontSize: 21,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "20px 24px 14px" }}>
              {["#ff9ccf", "#ffe08a", "#8fe3c4"].map((c) => (
                <div key={c} style={{ width: 16, height: 16, borderRadius: 99, background: c }} />
              ))}
              <div style={{ marginLeft: 12, fontSize: 18, color: "rgba(255,255,255,0.4)" }}>~/amal</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "6px 28px 30px" }}>
              {LINES.map((l) => (
                <div key={l.cmd} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ display: "flex" }}>
                    <span style={{ color: "#8fe3c4" }}>$</span>
                    <span style={{ color: "#b9a5ff", margin: "0 12px" }}>~</span>
                    {l.cmd}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.7)" }}>{l.out}</div>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#8fe3c4" }}>$</span>
                <span style={{ color: "#b9a5ff", margin: "0 12px" }}>~</span>
                <div style={{ width: 12, height: 24, background: "#ff9ccf" }} />
              </div>
            </div>
          </div>

          {/* mascot */}
          <div
            style={{
              ...sticker,
              position: "absolute",
              bottom: -34,
              left: -36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 92,
              height: 92,
              borderRadius: 99,
              background: "#ff9ccf",
              color: INK,
              fontFamily: "Mono",
              fontSize: 32,
              transform: "rotate(-14deg)",
            }}
          >
            :)
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Grotesk", data: bold, weight: 700, style: "normal" },
        { name: "Grotesk", data: medium, weight: 500, style: "normal" },
        { name: "Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
