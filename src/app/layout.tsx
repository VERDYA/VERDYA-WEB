import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VERDYA - Especialistas em Transformação Digital | IA, Cloud, Mobile",
  description: "Transformação digital completa com especialistas em IA Generativa, Cloud Computing, Mobile Development e Automação. Consultoria estratégica para empresas que querem inovar.",
  keywords: [
    "transformação digital",
    "consultoria tecnológica", 
    "IA generativa",
    "cloud computing",
    "desenvolvimento mobile",
    "automação empresarial",
    "ChatGPT",
    "AWS",
    "Azure",
    "VERDYA"
  ],
  authors: [{ name: "VERDYA" }],
  creator: "VERDYA",
  publisher: "VERDYA",
  robots: "index, follow",
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#84cc16',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://verdya.com.br',
    title: 'VERDYA - Especialistas em Transformação Digital',
    description: 'Transformação digital completa com especialistas em IA Generativa, Cloud Computing, Mobile Development e Automação.',
    siteName: 'VERDYA',
    images: [
      {
        url: 'https://verdya.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VERDYA - Transformação Digital'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@verdya',
    creator: '@verdya',
    title: 'VERDYA - Especialistas em Transformação Digital',
    description: 'Transformação digital completa com IA Generativa, Cloud Computing e Mobile Development.',
    images: ['https://verdya.com.br/og-image.jpg']
  },
  alternates: {
    canonical: 'https://verdya.com.br',
  },
  category: 'Technology',
};

import WebVitals from '../components/Analytics/WebVitals';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//unpkg.com" />
        {/* Preload critical resources */}
        <link rel="preload" href="https://unpkg.com/aos@2.3.1/dist/aos.css" as="style" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
