import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orari në Xhamajkë",
  description: "Konvertim i orarit të transmetimit për Xhamajkë"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
