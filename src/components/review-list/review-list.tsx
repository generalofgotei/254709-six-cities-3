import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';
import { AuthorizationStatus } from '../../const';
import { ReviewsType } from '../../types/reviews';
import { useAppSelector } from '../../store';
import { userSelectors } from '../../selectors/userSelectors';

type ReviewListProps = {
  reviews: ReviewsType;
};

const ReviewList = ({ reviews }: ReviewListProps): JSX.Element => {
  const authorizationStatus = useAppSelector(userSelectors.selectAuthStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
};

export default ReviewList;
