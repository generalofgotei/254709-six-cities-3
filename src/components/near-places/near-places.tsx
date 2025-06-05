import Card from '../card/card';
import { OffersType, OfferType } from '../../types/offers';
import { useMemo } from 'react';

type NearPlacesProps = {
  offers: OffersType;
  onActiveOfferChange: (offer?: OfferType) => void;
}

const NearPlaces = ({offers, onActiveOfferChange}: NearPlacesProps): JSX.Element => {
  const offerCards = useMemo(() =>
    offers.map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
        handleHover={onActiveOfferChange}
      />
    )), [offers, onActiveOfferChange]
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
