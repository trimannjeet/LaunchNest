import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Suspense } from 'react';
import AiChatbot from "@/components/AiChatbot";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // Update for production
  title: "LaunchNest - Startup Enabler for Idea to Execution",
  description: "LaunchNest is a startup enabler brand helping innovators and early-stage companies transform ideas into successful startups with end-to-end execution.",
  keywords: "startup, entrepreneurship, business development, web development, branding, idea validation, social media",
  openGraph: {
    title: "LaunchNest - Startup Enabler for Idea to Execution",
    description: "LaunchNest is a startup enabler brand helping innovators and early-stage companies transform ideas into successful startups.",
    type: "website",
    images: '/og-image.jpg', // Add placeholder or generate
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
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full antialiased`}
      data-theme="neon"
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('launchnest-theme');
                  var fallback = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'neon' : 'light';
                  document.documentElement.setAttribute('data-theme', saved || fallback);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-white" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <ThemeProvider>
          <ScrollProgress />
          <Navigation />
          <a href="#main-content" className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] bg-[var(--primary)] text-slate-900 px-4 py-2 rounded font-medium">Skip to main content</a>
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <Suspense fallback={null}>
            <AiChatbot />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
