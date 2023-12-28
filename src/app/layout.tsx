import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import '@/sass/globals.scss';

import styles from '../sass/pages/layout.module.scss';
import { MenuFloat } from '@/components/MenuFloat';
import { Gradient } from '@/components/Gradient';

export const metadata: Metadata = {
  title: 'thiagoribeiro.dev',
  description: 'Frontend Developer',
  icons: {
    icon: 'assets/favicon.svg'
  }
};

const inter = Inter({
  weight: ['300', '400', '600', '700', '900'],
  subsets: ['latin']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.container}>
          <Gradient />
          <MenuFloat />
          {children}
        </main>
      </body>
    </html>
  );
}