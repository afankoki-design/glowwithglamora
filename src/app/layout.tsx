import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glamora | Luxury Beauty & Cosmetics",
  description: "Discover richly pigmented lipsticks, premium foundations, and high-end beauty essentials at Glamora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
