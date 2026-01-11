import type { Metadata } from 'next';
import {notFound} from 'next/navigation';
import React, { JSX } from 'react';
import { HTag } from '@components';
import { getPage, getMenu } from '@api';

export const metadata = { title: 'PageProducts' };

interface IPageProducts {
  params: {
    alias: string
  }
}

export async function generateStaticParams(): Promise<IPageProducts['params'][]> {
  const menu = await getMenu(0, true);
  return menu.flatMap(item => item.pages.map(page => ({alias: page.alias })))
}

export default async function PageProducts({ params }: IPageProducts): Promise<JSX.Element>  {
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
