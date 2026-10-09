import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amal Saeed · Software Engineer",
  description:
    "Software engineer building products people actually use. Currently at felixx.",
};

// Dark by default; only switches to light if the visitor picked it with the toggle.
// Runs before paint so there's no light/dark flash.
const themeScript = `(function(){try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${grotesk.variable} ${jetbrains.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
