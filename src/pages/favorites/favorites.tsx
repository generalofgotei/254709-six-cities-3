import Footer from '../../components/footer/footer';
import { FavoriteList } from '../../components/favoriteList/favorite-list';
import { Helmet } from 'react-helmet-async';

const Favorites = (): JSX.Element => (
  <div className="page">

    <Helmet>
      <title>6 cities: favorites</title>
    </Helmet>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList />
        </section>
      </div>
    </main>

    <Footer />
  </div>
);

export default Favorites;
