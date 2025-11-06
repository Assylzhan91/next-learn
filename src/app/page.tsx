import React, { JSX } from 'react';
import Head from 'next/head';
import { HTag, Button } from '@components';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>My Custom Page Title</title>
        <meta name="description" content="A description for my page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button appearance="ghost">ghost</Button>
        <Button>default</Button>
        <Button appearance={'primary'}>primary</Button>
      </div>
      <div>
        <HTag tag={'h1'}>this is h1 tag</HTag>
        <HTag tag={'h2'}>this is h2 tag</HTag>
        <HTag tag={'h3'}>this is h3 tag</HTag>
      </div>
    </>
  );
}
