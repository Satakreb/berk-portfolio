import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { siteMetadata } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
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
      className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
