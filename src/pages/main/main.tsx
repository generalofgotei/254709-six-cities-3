import NavItem from '../../components/nav-item/nav-item';
import Map from '../../components/map/map';
import OfferSection from '../../components/offer-section/offer-section';
import { Helmet } from 'react-helmet-async';
import { OffersType, OfferType } from '../../mocks/offers';
import { Nullable } from 'vitest';
import { Cities } from '../../const';

type MainProps = {
  offers: OffersType;
  activeOffer: Nullable<OfferType>;
  activeCity: typeof Cities[number];
  handleActiveOfferChange: (offer?: OfferType) => void;
  handleActiveCityChange: (city: typeof Cities[number]) => void;
};

const Main = ({
  offers,
  activeOffer,
  activeCity,
  handleActiveOfferChange,
  handleActiveCityChange
}: MainProps): JSX.Element => (
  <div className="page page--gray page--main">
    <Helmet>
      <title>6 cities</title>
    </Helmet>

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <NavItem activeCity={activeCity} onCityActiveChange={handleActiveCityChange}/>

      <div className="cities">
        <div className="cities__places-container container">
          <OfferSection
            offers={offers}
            activeCity={activeCity}
            onActiveOfferChange={handleActiveOfferChange}
          />

          <div className="cities__right-section">
            <div className="cities__right-section">
              <Map
                className="cities__map"
                offers={offers}
                activeOffer={activeOffer}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Main;
