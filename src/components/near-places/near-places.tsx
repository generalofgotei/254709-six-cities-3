import Card from '../card/card';
import { OffersType } from '../../types/offers';
import { useMemo } from 'react';

type NearPlacesProps = {
  offers: OffersType;
}

const NearPlaces = ({offers}: NearPlacesProps): JSX.Element => {
  const offerCards = useMemo(() =>
    offers.map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
      />
    )), [offers]
  );

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offerCards}
      </div>
    </section>
  );
};

export default NearPlaces;
