import React, { JSX } from 'react';

import { getMenu } from '@api';

export async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu(0);
  return (
    <main>
      <div>{menu?.length}</div>
    </main>
  );
}
