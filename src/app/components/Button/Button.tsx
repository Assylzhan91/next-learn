import React, { JSX } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import Arrow from './arrow.svg';
import cn from 'classnames';

export const Button = ({
  appearance = 'primary',
  children,
  arrow = 'none',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const classButton = cn(styles.button, className, [styles[appearance]]);
  const classArrow = cn(styles.arrow, [styles[arrow]]);

  return (
    <button className={classButton} {...props}>
      {children}
      {arrow !== 'none' && (
        <span className={classArrow}>
          <Arrow width={10} height={10} fill="red" />
        </span>
      )}
    </button>
  );
};
