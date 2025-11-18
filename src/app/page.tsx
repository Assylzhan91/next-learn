'use client';

import React, { JSX, useState } from 'react';
import Head from 'next/head';
import { HTag, Button, P, Tag, Rating } from '@components';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
      <Rating rating={4}></Rating>
      <Head>
        <title>My Custom Page Title</title>
        <meta name="description" content="A description for my page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button arrow={'down'} appearance="ghost" className={'adasd'}>
          ghost
        </Button>
        <Button arrow={'right'}>default</Button>
        <Button arrow={'down'} appearance={'primary'}>
          primary
        </Button>
      </div>
      <div>
        <HTag tag={'h1'}>this is h1 tag</HTag>
        <HTag tag={'h2'}>this is h2 tag</HTag>
        <HTag tag={'h3'}>this is h3 tag</HTag>
      </div>
      <div>
        <P size="s" className="sadas">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
          veniam?
        </P>
        <P size="m">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
          veniam?
        </P>
        <P size="l">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
          veniam?
        </P>
      </div>

      <div>
        <Tag color="primary">Lorem ipsum dolor sit.</Tag>
        <Tag size="m" color="red">
          Lorem ipsum dolor sit.
        </Tag>
        <Tag size="s" color="grey">
          Lorem ipsum dolor sit.
        </Tag>
        <Tag size="s" color="green">
          Lorem ipsum dolor sit.
        </Tag>
        <Tag href="asdasdasdasd" size="s" color="green">
          Lorem ipsum dolor sit.
        </Tag>
        <Tag size="m" color="primary">
          Lorem ipsum dolor sit.
        </Tag>
      </div>
    </>
  );
}
