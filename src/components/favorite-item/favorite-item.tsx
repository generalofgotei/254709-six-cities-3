import type { OffersType } from '../../types/offers';
import Card from '../card/card';
import { memo, useMemo } from 'react';

type FavoriteItemProps = {
  cityName: string;
  offers: OffersType;
};

export const FavoriteItem = memo<FavoriteItemProps>(({ cityName, offers }: FavoriteItemProps) => {
  const offerCards = useMemo(() =>
    offers.map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
        isFavoritePage
      />
    )), [offers]
  );

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offerCards}
      </div>
    </li>
  );
});

FavoriteItem.displayName = 'FavoriteItem';
