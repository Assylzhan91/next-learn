import React, { JSX } from 'react';
import { Metadata } from 'next';
import styles from './page.module.scss';

import { Menu } from '@/app/(site)/components/menu';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Computed Metadata',
  };
}

export default async function Home(): Promise<JSX.Element> {
  return (
    <main className={styles.main}>
      Main page
      <Menu />
    </main>
  );
}
