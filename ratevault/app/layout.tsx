import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { ClientEffects } from '@/components/ClientEffects';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "RateVault — Compare Australia's Top Fixed Term Deposit Rates",
  description:
    'RateVault helps Australians compare fixed term deposit rates from leading institutions. Make informed decisions with transparent, side-by-side comparisons.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <ClientEffects />
      </body>
    </html>
  );
}
