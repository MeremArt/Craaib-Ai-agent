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
  title: "Craaib",
  description: "AI Agents for the Future of SUI",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1736773357/carbhigh_ud0l8k.png",
        width: 1200,
        height: 630,
        alt: "Craaib Logo",
      },
    ],
  },
  twitter: {
    title: "Craaib",
    description: "AI Agents for the Future of SUI",
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1736773357/carbhigh_ud0l8k.png",
        alt: "Craaib Logo",
      },
    ],
    creator: "",
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
