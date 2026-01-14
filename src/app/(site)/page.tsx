import React, { JSX } from 'react';
import { Metadata } from 'next';
import styles from './page.module.scss';
import { API } from '@/app/(site)/api';
import { Menu } from '@/app/(site)/components/menu';
import { MenuItem } from '@interfaces/menu.interface';
import { getPage, getMenu } from '@api';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Computed Metadata',
  };
}

export default async function Home(): Promise<JSX.Element> {
  const menu = await getMenu(0);
  return (
    <main className={styles.main}>
      Main page
      <Menu />
      <ul>
        {menu && menu.map(item => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
      </ul>
    </main>
  );
}
