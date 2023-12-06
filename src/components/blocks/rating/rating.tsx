import React, { ChangeEvent } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { RequestStatus } from '../../../const';

const ratingMap = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

type RatingProps = {
  value: number;
  onChange: (value: number) => void;
};

export function Rating({ value, onChange }: RatingProps) {
  const sendingStatus = useAppSelector((state)=> state.reviewsFetchingStatus);

  const isSending = sendingStatus === RequestStatus.Pending;

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(ratingMap).reverse().map(([star, title]) => (
        <React.Fragment key={star}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={star}
            id={`${star}-stars`}
            type="radio"
            onChange={handleRatingChange}
            checked={value === Number(star)}
            disabled={isSending}
          />
          <label
            htmlFor={`${star}-stars`}
            className="reviews__rating-label form__rating-label"
            title={title}
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}
