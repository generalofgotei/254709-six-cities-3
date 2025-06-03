import { FavoriteList } from '../favorite-list/favorite-list';

const FavoritesMain = (): JSX.Element => (
  <main className='page__main page__main--favorites'>
    <div className='page__favorites-container container'>
      <section className='favorites'>
        <h1 className='favorites__title'>Saved listing</h1>
        <FavoriteList />
      </section>
    </div>
  </main>
);

export default FavoritesMain;

