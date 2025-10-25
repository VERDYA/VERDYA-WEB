'use client';

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  schemaData?: object;
  noIndex?: boolean;
}

const DEFAULT_SEO = {
  title: 'VERDYA - Especialistas em Transformação Digital | IA, Cloud, Mobile',
  description: 'Transformação digital com foco em IA Generativa, Cloud Computing, Mobile Development e Automação. Consultoria estratégica especializada para empresas inovadoras.',
  keywords: [
    'transformação digital',
    'consultoria tecnológica',
    'IA generativa',
    'cloud computing',
    'desenvolvimento mobile',
    'automação',
    'RPA',
    'AWS',
    'Azure',
    'Google Cloud',
    'ChatGPT',
    'inteligência artificial',
    'VERDYA'
  ],
  ogImage: '/og-image.jpg',
  siteUrl: 'https://verdya.com.br'
};

export default function SEOHead({
  title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  canonicalUrl,
  ogImage = DEFAULT_SEO.ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schemaData,
  noIndex = false
}: SEOProps) {
  
  const fullTitle = title 
    ? `${title} | VERDYA - Transformação Digital`
    : DEFAULT_SEO.title;
  
  const fullCanonicalUrl = canonicalUrl 
    ? `${DEFAULT_SEO.siteUrl}${canonicalUrl}`
    : DEFAULT_SEO.siteUrl;

  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `${DEFAULT_SEO.siteUrl}${ogImage}`;

  const keywordString = keywords.join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordString} />
      <meta name="author" content="VERDYA" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Portuguese" />
      <meta name="geo.region" content="BR" />
      <meta name="geo.country" content="Brasil" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="VERDYA" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@verdya" />
      <meta name="twitter:creator" content="@verdya" />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Theme and Mobile */}
      <meta name="theme-color" content="#84cc16" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data (Schema.org) */}
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      )}

      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      
      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
  );
}