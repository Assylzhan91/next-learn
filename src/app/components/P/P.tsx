import React, { JSX } from 'react';
import { PProps } from './P.props';
import styles from './P.module.scss';
import cn from 'classnames';

export const P = ({
  size = 's',
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  const classP = cn(styles.p, className, [styles[size]]);

  return (
    <p className={classP} {...props}>
      children{children}
    </p>
  );
};
