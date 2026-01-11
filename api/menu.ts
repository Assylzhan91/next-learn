import { MenuItem } from '../interfaces/menu.interfaces';

import { API } from '@/app/(site)/api';

export async function getMenu(firstCategory: number, isRevalidate = false): Promise<MenuItem[]> {
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
  return res.json();
}
