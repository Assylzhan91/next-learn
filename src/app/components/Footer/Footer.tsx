import React, { JSX } from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>Lorem ipsum dolor sit amet @2020- {format(new Date(), 'yyyy')}</div>
      <div>Lorem ipsum.</div>
      <div>Lorem ipsum dolor.</div>
    </footer>
  );
};
