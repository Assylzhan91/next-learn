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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        assumenda autem beatae distinctio eaque eum excepturi, facilis ipsa modi
        molestiae obcaecati, odit possimus praesentium quaerat quisquam ratione
        veritatis! Adipisci aliquid animi dolor doloribus illum magni,
        necessitatibus nemo non porro repellat rerum sed tempore. Aliquam, autem
        beatae dolore, doloremque ducimus expedita fuga hic iure nam
        necessitatibus numquam praesentium, quia quis quisquam recusandae
        tempora voluptatem voluptatibus! Accusamus amet commodi consequatur
        deleniti ea eius et fuga fugiat fugit, laborum obcaecati officia qui
        quis sit tempore? Ex, quibusdam, voluptate. Dignissimos dolorum expedita
        maxime veritatis voluptatum! Cum delectus est laborum maxime
        perspiciatis reiciendis unde voluptas.
      </div>
    </>
  );
}
