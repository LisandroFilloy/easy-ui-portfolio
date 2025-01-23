import React from 'react';
import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';

import './globals.css';
import NavBar from '@/components/layout/NavBar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-silkscreen',
});

export const metadata: Metadata = {
  title: 'Lisandro Filloy',
  description: `Hi 👋, I'm Lisandro Filloy. I'm a passionate software develpper with a knack for creating visualy stunning, scalable, high-performance applications and reusable systems. With a strong foundation in front-end and back-end technologies, I specialize in crafting solutions that are impactful for clients.`,
  creator: 'Lisandro Filloy',
  applicationName: 'My website',
  keywords: [
    'Lisandro Filloy',
    'Lisandro',
    'Filloy',
    'Portfolio',
    'Next.js',
    'Software engineer',
  ],
  icons: {
    icon: './favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://www.adelguitoun.com',
    title: 'Lisandro Filloy - Software Engineer',
    description: `Hi 👋, I'm Lisandro Filloy. I'm a passionate software develpper with a knack for creating visualy stunning, scalable, high-performance applications and reusable systems. With a strong foundation in front-end and back-end technologies, I specialize in crafting solutions that are impactful for clients.`,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 628,
        alt: 'Adel Guitoun',
      },
    ],
  },
  verification: {
    google: 'k83JtkKiU8MvRqLS05NLwZPSOGLJXbZpzln4wdJ-iPI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${silkscreen.variable} relative`}>
        <NavBar />
        <main>{children}</main>
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}
