'use client';
import React, { JSX, useState } from 'react';
import styles from './Layout.module.scss';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return <main className={styles.main}>Main page</main>;
}
