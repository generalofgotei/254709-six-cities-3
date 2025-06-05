import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { calculateRating } from '../../utils';
import type { OfferType } from '../../types/offers';
import cn from 'classnames';
import FavoriteButton from '../favorite-button/favorite-button';
import { memo, useMemo, useCallback } from 'react';

const FAVORITE_IMAGE_WIDTH = 150;
const FAVORITE_IMAGE_HEIGHT = 110;
const OFFER_IMAGE_WIDTH = 260;
const OFFER_IMAGE_HEIGHT = 200;

type CardProps = {
  offer: OfferType;
  handleHover?: (offer?: OfferType) => void;
  isFavoritePage?: boolean;
  isNearbyPage?: boolean;
};

const Card = memo<CardProps>(
  ({ offer, handleHover, isFavoritePage = false, isNearbyPage = false }: CardProps): JSX.Element => {
    const {
      isFavorite,
      id,
      isPremium,
      previewImage,
      price,
      rating,
      title,
      type,
    } = offer;

    const handleMouseOn = useCallback(() => {
      handleHover?.(offer);
    }, [handleHover, offer]);

    const handleMouseOff = useCallback(() => {
      handleHover?.();
    }, [handleHover]);

    const cardClasses = useMemo(
      () =>
        cn('place-card', {
          'favorites__card': isFavoritePage,
          'near-places__card': isNearbyPage,
          'cities__card': !isFavoritePage && !isNearbyPage,
        }),
      [isFavoritePage]
    );

    const imageWrapperClasses = useMemo(
      () =>
        cn('place-card__image-wrapper', {
          'favorites__image-wrapper': isFavoritePage,
          'near-places__image-wrapper': isNearbyPage,
          'cities__image-wrapper': !isFavoritePage && !isNearbyPage,

        }),
      [isFavoritePage]
    );

    const cardInfoClasses = useMemo(
      () => cn('place-card__info', { 'favorites__card-info': isFavoritePage }),
      [isFavoritePage]
    );

    const imageSize = useMemo(
      () => ({
        width: isFavoritePage ? FAVORITE_IMAGE_WIDTH : OFFER_IMAGE_WIDTH,
        height: isFavoritePage ? FAVORITE_IMAGE_HEIGHT : OFFER_IMAGE_HEIGHT,
      }),
      [isFavoritePage]
    );

    const ratingWidth = useMemo(() => calculateRating(rating), [rating]);
    const capitalizedType = useMemo(
      () => type.charAt(0).toUpperCase() + type.slice(1),
      [type]
    );

    const offerLink = useMemo(() => `${AppRoute.Offer}/${id}`, [id]);

    const formattedPrice = useMemo(() => `€${price}`, [price]);

    return (
      <article
        className={cardClasses}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOff}
      >
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}

        <div className={imageWrapperClasses}>
          <Link to={offerLink}>
            <img
              className="place-card__image"
              src={previewImage}
              width={imageSize.width}
              height={imageSize.height}
              alt={title}
            />
          </Link>
        </div>

        <div className={cardInfoClasses}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">{formattedPrice}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <FavoriteButton isCard id={id} isFavorite={isFavorite} />
          </div>

          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: ratingWidth }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>

          <h2 className="place-card__name">
            <Link to={offerLink}>{title}</Link>
          </h2>

          <p className="place-card__type">{capitalizedType}</p>
        </div>
      </article>
    );
  }
);

Card.displayName = 'Card';

export default Card;
