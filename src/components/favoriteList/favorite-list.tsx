import { FavoriteItem } from '../favorite-item/favorite-item';
import { OffersType } from '../../types/offers';
import { useAppSelector } from '../../store';
import { offersSelectors } from '../../selectors/offers';

type OffersByCityType = {
  [city: string]: OffersType;
};

export const FavoriteList = (): JSX.Element => {
  const favoriteOffers = useAppSelector(offersSelectors.favoriteOffers);

  const offersByCity: OffersByCityType =
    favoriteOffers.reduce((acc, offer) => {
      const cityName = offer.city.name;
      if (!acc[cityName]) {
        acc[cityName] = [];
      }
      acc[cityName].push(offer);
      return acc;
    }, {} as OffersByCityType);

  const cities = Object.keys(offersByCity);
  return (
    <ul className="favorites__list">
      {cities.map((cityName) => (
        <FavoriteItem
          key={cityName}
          cityName={cityName}
          offers={offersByCity[cityName]}
        />
      ))}
    </ul>
  );
};
