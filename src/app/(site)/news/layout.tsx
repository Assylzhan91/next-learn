import React, { JSX } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NewsLayout',
  description: 'NewsLayout layout ',
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <div>{children}</div>;
}
