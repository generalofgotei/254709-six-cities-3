import Footer from '../../components/footer/footer';
import FavoritesMain from '../../components/favorites-main/favorites-main';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../store';
import { offersSelectors } from '../../selectors/offersSelectors';

const Favorites = (): JSX.Element => {
  const favoriteOffersCount = useAppSelector(offersSelectors.selectFavoriteOffersCount);
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      {favoriteOffersCount > 0 && <FavoritesMain />}
      {favoriteOffersCount === 0 && <FavoritesEmpty />}
      <Footer />
    </div>
  );
};

export default Favorites;
