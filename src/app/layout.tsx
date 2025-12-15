import { DevMessage } from "@/components/dev-message";
import { Footer } from "@/components/footer";
import { FooterCTA } from "@/components/footer-cta";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import { cn } from "@/ui/cn";
import "@/ui/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { Provider as Analytics } from "@midday/events/client";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "CTRL+Filing | AI-Powered CPA Workflow Management",
    template: "%s | CTRL+Filing",
  },
  description:
    "CTRL+Filing streamlines tax preparation workflows with AI-powered document processing, automated reconciliation, and intelligent validation for CPA firms.",
  openGraph: {
    title: "CTRL+Filing | AI-Powered CPA Workflow Management",
    description:
      "CTRL+Filing streamlines tax preparation workflows with AI-powered document processing, automated reconciliation, and intelligent validation for CPA firms.",
    url: baseUrl,
    siteName: "CTRL+Filing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cdn.midday.ai/opengraph-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/opengraph-image.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    title: "CTRL+Filing | AI-Powered CPA Workflow Management",
    description:
      "CTRL+Filing streamlines tax preparation workflows with AI-powered document processing, automated reconciliation, and intelligent validation for CPA firms.",
    images: [
      {
        url: "https://cdn.midday.ai/opengraph-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/opengraph-image.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="preload" as="image" href="/hero-light.png" />
        <link rel="preload" as="image" href="/ctrlfiling-logo.svg" />
      </head>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable}`,
          "bg-[#fbfbfb] dark:bg-[#0C0C0C] overflow-x-hidden font-sans antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4 overflow-hidden md:overflow-visible">
            {children}
          </main>
          <FooterCTA />
          <Footer />
          {/* <Analytics /> */}
          <DevMessage />
        </ThemeProvider>
      </body>
    </html>
  );
}
