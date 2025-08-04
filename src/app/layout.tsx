import { PaintingsProvider } from '@/components/providers/painting-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { getPaintings } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Libre_Baskerville, Poppins } from 'next/font/google';
import './globals.css';

const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Canvasium | Discover Iconic Paintings',
  description: 'Explore a curated collection of famous paintings and timeless art from masters around the world.',
  keywords: ['art', 'paintings', 'gallery', 'classic art', 'famous painters', 'art appreciation', 'famous paintings'],
  authors: [{ name: 'Jose Roberto Vasquez Ramos', url: 'https://jobie.dev' }],
  creator: 'Jose Roberto Vasquez Ramos',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Canvasium | Discover Iconic Paintings',
    description: 'A beautifully designed collection of famous artworks — experience art like never before.',
    url: 'https://canvasium.vercel.app',
    siteName: 'Canvasium',
    images: [
      {
        url: 'https://canvasium.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview of the canvasium website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://canvasium.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const paintingsPromise = getPaintings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libreBaskerville.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PaintingsProvider paintingsPromise={paintingsPromise}>{children}</PaintingsProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
