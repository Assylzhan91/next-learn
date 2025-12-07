import React, { JSX } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login layout ',
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div>
      <div>Authorization</div>
      {children}
    </div>
  );
}
