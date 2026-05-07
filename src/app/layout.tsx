import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteMetadata } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berk Ataş | Portfolio",
  description: "Management Information Systems Student & Developer",
  metadataBase: new URL("https://berkatas.netlify.app"), // Netlify link
  openGraph: {
    title: "Berk Ataş | Portfolio",
    description: "Management Information Systems Student & Developer",
    url: "https://berkatas.netlify.app",
    siteName: "Berk Ataş",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berk Ataş | Portfolio",
    description: "Management Information Systems Student & Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
