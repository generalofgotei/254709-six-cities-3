import type { OffersStateType } from '../types/offers';
import type { RootState } from '../types/store';

export const offersSelectors = {
  selectCity: (state: { offers: OffersStateType }) => state.offers.city,
  selectOffers: (state: { offers: OffersStateType }) => state.offers.offers,
  selectStatus: (state: { offers: OffersStateType }) => state.offers.status,
  selectError: (state: { offers: OffersStateType }) => state.offers.error,
  selectFavoriteOffers: (state: RootState) => state.offers.offers.filter((offer) => offer.isFavorite),
};


