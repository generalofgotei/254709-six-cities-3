import { ReactEventHandler, useState, Fragment, FormEvent } from 'react';
import { rating } from '../../const';
import { sendComment } from '../../store/thunk/offerDetailThunk';
import { useAppDispatch } from '../../store';
import { useParams } from 'react-router-dom';
import { MIN_COMMENT_LENGTH } from '../../const';

type handleChangeType = ReactEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;

const ReviewForm = (): JSX.Element => {
  const { id: offerId } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const [review, setReview] = useState({ rating: 0, comment: '' });

  const handleChange: handleChangeType = (evt) => {
    const { name, value } = evt.currentTarget;
    setReview({ ...review, [name]: name === 'rating' ? Number(value) : value});
  };

  const handleSubmitComment = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!offerId) {
      throw new Error('ID didnt find');
    }
    dispatch(sendComment({ offerId, review }));
    setReview({ rating: 0, comment: '' });
  };
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmitComment}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        value={review.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.comment.length < MIN_COMMENT_LENGTH || review.rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
