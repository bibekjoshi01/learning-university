import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/lib/site';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: 'Tabflux Academy' }],
  creator: 'Tabflux Academy',
  publisher: 'Tabflux Academy',
  category: 'education',
  keywords: [
    'AI courses',
    'career tracks',
    'software engineering',
    'AI engineering',
    'career education',
    'Tabflux',
  ],
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.svg',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Tabflux Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#315BEA',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />{children}<SiteFooter />
      </body>
    </html>
  );
}
