import { OfferType, OffersType } from '../../types/offers';
import Card from '../card/card';
import { useAppSelector } from '../../store';
import { sortingOptions } from '../../const';
import { offersSelectors } from '../../selectors/offers';
import { useState } from 'react';
import cn from 'classnames';

type OfferSectionProps = {
  onActiveOfferChange: (offer?: OfferType) => void;
};

const sortOffers = (offers: OffersType, sortingType: string): OffersType => {
  switch (sortingType) {
    case sortingOptions.lowToHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case sortingOptions.highToLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case sortingOptions.topRated:
      return [...offers].sort((a, b) => b.rating - a.rating);
    case sortingOptions.popular:
    default:
      return offers;
  }
};

const OfferSection = ({
  onActiveOfferChange,
}: OfferSectionProps): JSX.Element => {
  const [activeSorting, setActiveSorting] = useState<string>(sortingOptions.popular);
  const [isSortingListOpen, setSortingListOpen] = useState(false);
  const handleSortingListToggle = () => setSortingListOpen(!isSortingListOpen);
  const handleSortingChange = (sorting: string) => {
    setActiveSorting(sorting);
    handleSortingListToggle();
  };

  const activeCity = useAppSelector(offersSelectors.city);
  const activeOffers = useAppSelector(offersSelectors.offers).filter(
    (offer) => offer.city.name === activeCity
  );

  const sortedOffers = sortOffers(activeOffers, activeSorting);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {activeOffers.length} places to stay in {activeCity}
      </b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex={0}
          onClick={() => handleSortingListToggle()}
        >
          {activeSorting}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={cn('places__options', 'places__options--custom', {
            'places__options--opened': isSortingListOpen,
          })}
        >
          {Object.values(sortingOptions).map((option) => (
            <li
              key={option}
              className={cn('places__option', {
                'places__option--active': activeSorting === option,
              })}
              tabIndex={0}
              onClick={() => handleSortingChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            handleHover={onActiveOfferChange}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
