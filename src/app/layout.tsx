import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthProvider } from "../contexts/AuthContext";
import FloatingShareButton from "@/components/FloatingShareButton";
import AIChatbot from "@/components/AIChatbot";

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
  keywords: "astrology, birth chart, horoscope, lunar phases, meditation, crystals, zodiac, cosmic forecast, spiritual growth, moon rituals",
  authors: [{ name: "Celestia Scope" }],
  creator: "Celestia Scope",
  publisher: "Celestia Scope",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thecelestialcalendar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Celestia Scope - Your Cosmic Journey",
    description: "Discover your birth chart, daily rituals, lunar phases, cosmic forecasts, and personalized astrological insights.",
    url: 'https://thecelestialcalendar.com',
    siteName: 'Celestia Scope',
    images: [
      {
        url: '/images/crystals.svg',
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
    images: ['/images/crystals.svg'],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
