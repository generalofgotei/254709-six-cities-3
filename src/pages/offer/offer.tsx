import { useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import ReviewList from '../../components/review-list/review-list';
import { AuthorizationStatus } from '../../const';
import type { OfferType } from '../../types/offers';
import { calculateRating } from '../../utils';
import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-paces';
import { Nullable } from 'vitest';
import { useAppSelector, useAppDispatch } from '../../store';
import { useState, useEffect } from 'react';
import { offersSelectors } from '../../selectors/offersSelectors';
import { offerDetailSelectors } from '../../selectors/offerDetailSelectors';
import { fetchOfferDetail, fetchNearbyOffers, fetchComments } from '../../store/thunk/offerDetailThunk';
import { RequestStatus } from '../../const';
import Spinner from '../../components/spinner/spinner';

type OfferProps = {
  authorizationStatus: (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
};

const Offer = ({ authorizationStatus }: OfferProps) => {
  const [activeOffer, setActiveOffer] = useState<Nullable<OfferType>>(null);

  const handleActiveOfferChange = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  const allOffers = useAppSelector(offersSelectors.selectOffers);
  const activeCity = useAppSelector(offersSelectors.selectCity);
  const offers = allOffers.filter(
    (offer: OfferType) => offer.city.name === activeCity
  );

  const id = useParams().id;
  const dispatch = useAppDispatch();
  const status = useAppSelector(offerDetailSelectors.selectStatus);
  const currentOffer = useAppSelector(offerDetailSelectors.selectOffer);
  const comments = useAppSelector(offerDetailSelectors.selectComments);
  const nearbyOffers = useAppSelector(offerDetailSelectors.selectNearbyOffers).slice(0, 3);
  useEffect(() => {
    dispatch(fetchOfferDetail(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  if (status === RequestStatus.loading) {
    return <Spinner />;
  }
  if (!currentOffer) {
    return <NotFound />;
  }
  const { isFavorite, isPremium, price, rating, title, type, bedrooms, maxAdults, goods, host, images, description } = currentOffer;
  const neighbourhoodOffers = offers
    .filter((offer: OfferType) => offer.id !== id)
    .slice(0, 3);

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button
                  className={`offer__bookmark-button button ${
                    isFavorite && 'offer__bookmark-button--active'
                  }`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${calculateRating(rating)}` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (<li key= {good} className="offer__inside-item">{good}</li>))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  <span className="offer__user-status">{host.isPro}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>

              <ReviewList
                authorizationStatus={authorizationStatus}
                reviews={comments}
              />
            </div>
          </div>
          <Map
            className="offer__map"
            offers={nearbyOffers}
            activeOffer={activeOffer}
          />
        </section>
        <div className="container">
          <NearPlaces
            offers={neighbourhoodOffers}
            onActiveOfferChange={handleActiveOfferChange}
          />
        </div>
      </main>
    </div>
  );
};

export default Offer;
