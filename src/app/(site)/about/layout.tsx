import React, { JSX } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About1',
  description: 'About1 layout ',
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <div>{children}</div>;
}
