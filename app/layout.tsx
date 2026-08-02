import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Continental Luxe Marketing',
  description: 'Premium digital marketing agency for luxury brands. Strategy, branding, design, paid media, and creative growth.',
  metadataBase: new URL('https://continental-luxe-marketing.com'),
  openGraph: {
    title: 'Continental Luxe Marketing',
    description: 'Premium digital marketing agency for luxury brands.',
    type: 'website',
    url: 'https://continental-luxe-marketing.com',
    images: [
      {
        url: 'https://continental-luxe-marketing.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Continental Luxe Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Continental Luxe Marketing',
    description: 'Premium digital marketing agency for luxury brands.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-body bg-black text-white`}>{children}</body>
    </html>
  );
}
