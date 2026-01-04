import type { Metadata } from 'next';
import React, { JSX } from 'react';
import { HTag } from '@components';

export const metadata = { title: 'PageProducts' };

interface IPageProducts {
  params: {
    alias: string
  }
}

export default async function Products({ params }: IPageProducts): Promise<JSX.Element>  {
  const { alias } = await params;
  console.log(1);
  return (
    <div>
    <HTag tag="h1">PageProducts</HTag>
    <HTag tag="h1">{ alias }</HTag>


    </div>
  );
}
