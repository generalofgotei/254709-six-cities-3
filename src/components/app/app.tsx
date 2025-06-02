import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { fetchAllOffers, fetchFavoriteOffers } from '../../store/thunk/offersThunk';
import { useAppDispatch, useAppSelector } from '../../store';
import { RequestStatus } from '../../const';
import { useEffect } from 'react';
import { offersSelectors } from '../../selectors/offersSelectors';
import { checkAuthStatus } from '../../store/thunk/authThunk';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(offersSelectors.selectStatus);

  useEffect(() => {
    dispatch(checkAuthStatus());
    if (status === RequestStatus.idle) {
      dispatch(fetchAllOffers());
      dispatch(fetchFavoriteOffers());
    }
  }, [dispatch, status]);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Layout />}
          >
            <Route index element={<Main />} />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={
                <Offer/>
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
