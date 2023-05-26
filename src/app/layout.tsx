import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'I❤️ Quotes',
  description:
    'Unleash your creativity with the next-level Inspirational Quote Generator! Powered by the latest NEXT 13.4 and AWS Lambda Functions. Generate and effortlessly save stunning quote images for your Twitter, Instagram, and all your beloved social media accounts.',
  openGraph: {
    title: 'I❤️ Quotes',
    url: 'https://ilov-quotes.vercel.app',
    siteName: 'Ilov Quotes',
    description:
      'Unleash your creativity with the next-level Inspirational Quote Generator! Powered by the latest NEXT 13.4 and AWS Lambda Functions. Generate and effortlessly save stunning quote images for your Twitter, Instagram, and all your beloved social media accounts.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/logo.svg',
        width: 1080,
        height: 1080,
      },
    ],
  },
  creator: 'Shivang Mishra',
  applicationName: 'Ilov Quotes',
  keywords: [
    'quote generator',
    'inspirational quotes',
    'quote images',
    'online quote generator',
    'new quotes',
    'shivang mishra',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
