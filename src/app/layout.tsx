import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthProvider } from "../contexts/AuthContext";
import FloatingShareButton from "@/components/FloatingShareButton";
import AIChatbot from "@/components/AIChatbot";
import SEOStructuredData from "@/components/SEOStructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celestia Scope - Your Cosmic Journey",
  description: "Discover your birth chart, daily rituals, lunar phases, cosmic forecasts, and personalized astrological insights. Join our mystical community for daily horoscopes, meditation guides, and spiritual growth.",
  keywords: "astrology, birth chart, horoscope, lunar phases, meditation, crystals, zodiac, cosmic forecast, spiritual growth, moon rituals, celestia scope, daily horoscope, astrological insights, cosmic journey, mystical astrology, spiritual guidance, zodiac signs, planetary influences, celestial wisdom, cosmic energy, astrological readings, birth chart calculator, daily rituals, lunar wisdom, cosmic predictions, spiritual practices, mystical community, astrology app, horoscope app, birth chart app, spiritual growth app",
  authors: [{ name: "Celestia Scope" }],
  creator: "Celestia Scope",
  publisher: "Celestia Scope",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://celestia-scope.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Celestia Scope - Your Cosmic Journey",
    description: "Discover your birth chart, daily rituals, lunar phases, cosmic forecasts, and personalized astrological insights.",
    url: 'https://celestia-scope.vercel.app',
    siteName: 'Celestia Scope',
    images: [
      {
        url: '/images/celestia-scope-logo.png',
        width: 1200,
        height: 630,
        alt: 'Celestia Scope - Mystical Astrology Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Celestia Scope - Your Cosmic Journey",
    description: "Discover your birth chart, daily rituals, lunar phases, cosmic forecasts, and personalized astrological insights.",
    images: ['/images/celestia-scope-logo.png'],
    creator: '@celestiascope',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SEOStructuredData />
        <AuthProvider>
          <Navbar />
          <FloatingShareButton />
          <AIChatbot />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
