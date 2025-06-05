import { ReviewType } from '../../types/reviews';
import { calculateRating, getHumanDate } from '../../utils';
import { memo, useMemo } from 'react';

type ReviewItemProps = {
  review: ReviewType;
};

const ReviewItem = memo<ReviewItemProps>(({ review }: ReviewItemProps): JSX.Element => {
  const { date, user, comment, rating } = review;

  const ratingWidth = useMemo(() => calculateRating(rating), [rating]);
  const humanDate = useMemo(() => getHumanDate(date), [date]);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingWidth }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={humanDate.dateTime}>
          {humanDate.monthYear}
        </time>
      </div>
    </li>
  );
});

ReviewItem.displayName = 'ReviewItem';

export default ReviewItem;
