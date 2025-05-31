import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ReviewsType } from '../../types/reviews';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { fetchAllOffers } from '../../store/thunk/offersThunk';
import { useAppDispatch, useAppSelector } from '../../store';
import { RequestStatus } from '../../const';
import { useEffect } from 'react';
import { offersSelectors } from '../../selectors/offersSelectors';

type AppProps = {
  authorizationStatus: (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
  reviews: ReviewsType;
};

const App = ({ authorizationStatus, reviews }: AppProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(offersSelectors.selectStatus);

  useEffect(() => {
    // Загружаем офферы при пуске приложения
    if (status === RequestStatus.idle) {
      dispatch(fetchAllOffers());
    }
  }, [dispatch, status]);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Layout authorizationStatus={authorizationStatus} />}
          >
            <Route index element={<Main />} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={
                <Offer
                  authorizationStatus={authorizationStatus}
                  reviews={reviews}
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
