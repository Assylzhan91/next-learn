import { ProductModel } from '@interfaces/product.inteface';

import { API } from '@/app/(site)/api';

export async function getProduct(category: string, limit: number = 10): Promise<ProductModel[]> {
  const res = await fetch(API.product.find, {
    method: 'POST',
    body: JSON.stringify({
      category,
      limit
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  return res.json();
}
