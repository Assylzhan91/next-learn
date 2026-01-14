import type { Metadata } from 'next';
import {notFound} from 'next/navigation';
import React, { JSX } from 'react';

import { MenuItem } from '@interfaces/menu.interface';
import { IPageProducts } from '@interfaces/page.interface';
import { getPage, getMenu, getProduct } from '@api';
import { HTag } from '@components';

export const metadata = { title: 'Courses' };

export async function generateStaticParams(): Promise<IPageProducts['params'][]> {
  const menu = await getMenu(0);
  return menu?.flatMap(item => item.pages.map(page => ({alias: page.alias }))) || []
}

export default async function PageCourses({ params }: IPageProducts): Promise<JSX.Element>  {
  const { alias } = await params;
  const page = await getPage(alias);
  if (!page) return notFound();
  const product = await getProduct(page?.category, 10)

  if (!product || product.length === 0) return notFound();
  return (
    <div>
      <HTag tag="h1">Courses</HTag>
      <HTag tag="h2">  { product.length }</HTag>
    </div>
  );
}


interface ICourseProps {
  menu: MenuItem[]
}