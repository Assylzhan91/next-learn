import { MenuItem } from '@interfaces/menu.interface';

import { API } from '@/app/(site)/api';

export async function getMenu(firstCategory: number, isRevalidate = false): Promise<MenuItem[] | null> {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory,
    }),
    headers: {
      'content-type': 'application/json',
    },
  ...(isRevalidate &&  {next: { revalidate: 10 }})
  });
  if (!res.ok) return null;
  return res.json();
}
