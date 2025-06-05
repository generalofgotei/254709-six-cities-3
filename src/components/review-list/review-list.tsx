import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import { AuthorizationStatus } from '../../const';
import { ReviewsType } from '../../types/reviews';
import { useAppSelector } from '../../store';
import { userSelectors } from '../../selectors/userSelectors';
import { useMemo } from 'react';

type ReviewListProps = {
  reviews: ReviewsType;
};

const ReviewList = ({ reviews }: ReviewListProps): JSX.Element => {
  const authorizationStatus = useAppSelector(userSelectors.selectAuthStatus);

  const reviewItems = useMemo(() =>
    reviews.map((review) => (
      <ReviewItem key={review.id} review={review} />
    )), [reviews]
  );

  const isAuthenticated = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewItems}
      </ul>
      {isAuthenticated && <ReviewForm />}
    </section>
  );
};

export default ReviewList;
