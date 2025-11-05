import React from 'react';

export type HTagType = 'h1' | 'h2' | 'h3';

export interface IHTagProps {
  tag: HTagType;
  children?: React.ReactNode;
}
