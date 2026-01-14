import { TopPageModel } from '@interfaces/page.interface';
import { MenuItem } from '@interfaces/menu.interface';

import { API } from '@/app/(site)/api';

export async function getPage(alias: string): Promise<TopPageModel | null> {
  const res = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 10 }
  });
  if (!res.ok) return null;
  return res.json();
}
