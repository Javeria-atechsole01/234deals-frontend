import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "234Deals — Nigeria’s #1 Marketplace",
    template: "%s | 234Deals",
  },
  description: "234Deals is a modern marketplace platform for buying and selling in Nigeria.",
  metadataBase: new URL("https://www.example-234deals.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20 md:pb-0`}>
        {children}
      </body>
    </html>
  );
}
