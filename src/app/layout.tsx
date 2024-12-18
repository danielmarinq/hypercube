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
  title: "Hypercube Capital",
  description: "Hypercube Capital",
  openGraph: {
    title: "Hypercube Capital",
    description: "Hypercube Capital",
    type: "website",
    locale: "en_US",
    url: "https://hypercube.capital",
    images: [
      {
        url: "https://hypercube.vc/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hypercube Capital",
      },
    ],
  },
  twitter: {
    // creator: "@hypercube_cap",
    // site: "@hypercube_cap",
    card: "summary_large_image",
    images: "https://hypercube.vc/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
