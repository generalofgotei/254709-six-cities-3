import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { OfferType, OffersType } from '../../types/offers';
import { ReviewsType } from '../../types/reviews';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { Nullable } from 'vitest';
import { useState } from 'react';
import { useAppSelector } from '../../store';

type AppProps = {
  authorizationStatus: (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
  offers: OffersType;
  reviews: ReviewsType;
};

const App = ({
  authorizationStatus,
  offers,
  reviews,
}: AppProps): JSX.Element => {
  const [activeOffer, setActiveOffer] = useState<Nullable<OfferType>>(null);

  const handleActiveOfferChange = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  const activeCity = useAppSelector((state) => state.city);
  const activeOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Layout authorizationStatus={authorizationStatus} />}
          >
            <Route
              index
              element={
                <Main
                  offers={activeOffers}
                  activeOffer={activeOffer}
                  handleActiveOfferChange={handleActiveOfferChange}
                />
              }
            />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Favorites
                    favoriteOffers={offers.filter(
                      (offer) => offer.isFavorite === true
                    )}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={
                <Offer
                  authorizationStatus={authorizationStatus}
                  offers={activeOffers}
                  reviews={reviews}
                  activeOffer={activeOffer}
                  handleActiveOfferChange={handleActiveOfferChange}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
