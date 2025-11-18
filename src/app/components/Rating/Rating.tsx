'use client';

import React, { JSX, SVGProps, FC, useEffect, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.scss';
import Star from './star.svg';
import cn from 'classnames';

const StarIcon = Star as FC<SVGProps<SVGAElement>>;

export const Rating = ({
  isEditable = false,
  rating = 0,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (i: number): void => {
    if (isEditable) {
      constructRating(i);
    }
  };

  const onClick = (i: number): void => {
    if (isEditable && setRating) {
      setRating(i);
    }
  };
  const constructRating = (currentRating: number): void => {
    const updatingArray = ratingArray.map(
      (r: JSX.Element, i: number): JSX.Element => {
        return (
          <StarIcon
            key={i}
            className={cn({
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          ></StarIcon>
        );
      }
    );
    setRatingArray(updatingArray);
  };

  useEffect(() => constructRating(rating), [rating]);

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>): void => {
    if (e.code === 'Space' && setRating) {
      setRating(i);
    }
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
