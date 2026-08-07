import { Manrope, Newsreader } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader', display: 'swap' });

export const metadata = {
  title: 'Tabflux — Build a career for the AI era',
  description: 'A modern career university for the age of AI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body><Header />{children}<SiteFooter /></body>
    </html>
  );
}
