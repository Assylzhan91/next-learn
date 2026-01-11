import { MenuItem } from '../interfaces/menu.interfaces';

import { API } from '@/app/(site)/api';
import { TopPageModel } from '../interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel | null> {
  try {
    const res = await fetch(API.topPage.byAlias + alias, {
      next: { revalidate: 10 }
    });
    return res.json();
  }catch(e){
    return null;
  }
}
