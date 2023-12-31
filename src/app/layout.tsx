import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import '@styles/variables.css';

import '@styles/sass/globals.scss';

import styles from '../styles/sass/pages/layout.module.scss';
import { MenuFloat } from '@components/MenuFloat';
import { Gradient } from '@components/Gradient';
import { PropsWithChildren } from 'react';

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

export default function RootLayout({ children }: PropsWithChildren) {
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
