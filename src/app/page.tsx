import React, { JSX } from 'react';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>My Custom Page Title</title>
        <meta name="description" content="A description for my page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
        voluptatibus!
      </div>
    </>
  );
}
