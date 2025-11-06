import React, { JSX } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({
  appearance = 'primary',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const classButton = cn(styles.button, className, [styles[appearance]]);
  return (
    <button className={classButton} {...props}>
      {children}
    </button>
  );
};
