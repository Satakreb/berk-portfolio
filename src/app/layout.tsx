import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { siteMetadata } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
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
      className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
