import type { Metadata } from "next";
import { montserrat } from "@/app/fonts";
import "animate.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "apdev.pl Adam Pasierb",
  description:
    "Experienced Front-End Developer Since 2018 | Let's Build Something Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-dvh`}>{children}</body>
    </html>
  );
}
