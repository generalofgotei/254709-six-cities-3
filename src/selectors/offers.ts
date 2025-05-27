import type { RootState } from '../types/store';

export const selectOffers = (state: RootState) => state.offers;
export const selectCity = (state: RootState) => state.city;
export const selectFavoriteOffers = (state: RootState) => state.offers.filter((offer) => offer.isFavorite);
export const selectActiveOffers = (state: RootState) => state.offers.filter((offer) => offer.city.name === state.city);
