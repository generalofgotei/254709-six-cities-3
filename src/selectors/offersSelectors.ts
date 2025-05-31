import type { OffersState } from '../types/offers';
import type { RootState } from '../types/store';

export const offersSelectors = {
  selectCity: (state: { offers: OffersState }) => state.offers.city,
  selectOffers: (state: { offers: OffersState }) => state.offers.offers,
  selectStatus: (state: { offers: OffersState }) => state.offers.status,
  selectError: (state: { offers: OffersState }) => state.offers.error,
  selectFavoriteOffers: (state: RootState) => state.offers.offers.filter((offer) => offer.isFavorite),
};


