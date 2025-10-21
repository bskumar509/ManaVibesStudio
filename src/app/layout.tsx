import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'ManaVibes Studio — Empowering Brands with Digital Energy',
  description: 'ManaVibes Studio is a digital marketing agency offering Social Media Marketing, SEO, Branding, Web Development and Paid Ads to startups and small businesses.',
  openGraph: {
    title: 'ManaVibes Studio',
    description: 'Empowering Brands with Digital Energy',
    type: 'website',
    url: 'https://yourdomain.com',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ManaVibes Studio',
      },
    ],
  },
   twitter: {
    card: 'summary_large_image',
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
        className={cn('antialiased', poppins.variable, montserrat.variable)}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="font-body">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
