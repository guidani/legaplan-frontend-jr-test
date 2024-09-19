import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.scss";

const interTight = localFont({
  src: "./fonts/InterTightVF.ttf",
  variable: "--font-inter-tight",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "Um incrível TODO APP",
  authors: { name: "Guilherme Daniel", url: "https://www.github.com/guidani" },
  creator: "Guilherme Daniel",
  keywords: "todo, app, list, focalpoint, legaplan",
  applicationName: "FocalPoint",
  icons: "logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${interTight.variable} `}>
        {children}
      </body>
    </html>
  );
}
