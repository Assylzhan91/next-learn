import type { Metadata } from 'next';
import {notFound} from 'next/navigation';
import React, { JSX } from 'react';
import { HTag } from '@components';
import { getPage } from '../../../../../api/page';

export const metadata = { title: 'PageProducts' };

interface IPageProducts {
  params: {
    alias: string
  }
}

export default async function Products({ params }: IPageProducts): Promise<JSX.Element>  {
  const { alias } = await params;
  const page = await getPage(alias);
  if (!page) return notFound();

  return (
    <div>
    <HTag tag="h1">PageProducts</HTag>
    <HTag tag="h1">{page.title }</HTag>
    </div>
  );
}
