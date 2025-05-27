import type { RootState } from '../types/store';

export const offersSelectors = {
  city: (state: RootState) => state.city,
  offers: (state: RootState) => state.offers,
  favoriteOffers: (state: RootState) => state.offers.filter((offer) => offer.isFavorite),
  // нужно будет реализовать мемоизацию
  // activeOffers: (state: RootState) => state.offers.filter((offer) => offer.city.name === state.city),
};

