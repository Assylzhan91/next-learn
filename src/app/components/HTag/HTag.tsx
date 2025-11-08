import React, { JSX } from 'react';

import { IHTagProps } from './HTag.props';
import styles from './HTag.module.scss';

export const HTag = ({ tag, children }: IHTagProps): JSX.Element => {
  const Tag = tag;
  return <Tag className={styles[tag]}>{children}</Tag>;
};
