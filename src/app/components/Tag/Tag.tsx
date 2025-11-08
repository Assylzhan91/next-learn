import React, { JSX } from 'react';
import { TagProps } from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';

export const Tag = ({
  size = 's',
  children,
  color = 'ghost',
  className,
  href,
  ...props
}: TagProps): JSX.Element => {
  const classP = cn(
    styles.tag,
    className,
    [styles[size]],
    [styles[color]],
    href && styles.cursor
  );

  return (
    <div className={classP} {...props}>
      {href ? <a href={href}>{children}</a> : <>children</>}
    </div>
  );
};
