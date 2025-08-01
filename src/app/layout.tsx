import { PaintingsProvider } from '@/components/providers/painting-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { getPaintings } from '@/lib/utils';
import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';

const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and Bold
});

export const metadata: Metadata = {
  title: 'ArtiumXII | Discover Iconic Paintings',
  description: 'Explore a curated collection of famous paintings and timeless art from masters around the world.',
  keywords: ['art', 'paintings', 'gallery', 'classic art', 'famous painters', 'art appreciation'],
  authors: [{ name: 'Jose Roberto Vasquez Ramos', url: 'https://engrjvramos.com' }],
  creator: 'Jose Roberto Vasquez Ramos',
  openGraph: {
    title: 'ArtiumXII | Discover Iconic Paintings',
    description: 'A beautifully designed collection of famous artworks — experience art like never before.',
    url: 'https://artiumxii.com',
    siteName: 'ArtiumXII',
    images: [
      {
        url: 'https://artiumxii.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview of the ArtiumXII website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://artiumxii.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const paintingsPromise = getPaintings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libreBaskerville.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PaintingsProvider paintingsPromise={paintingsPromise}>{children}</PaintingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
