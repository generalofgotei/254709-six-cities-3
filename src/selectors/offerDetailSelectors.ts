import type { OfferDetailStateType } from '../types/offers';

export const offerDetailSelectors = {
  selectOffer: (state: { offerDetail: OfferDetailStateType }) => state.offerDetail.offer,
  selectNearbyOffers: (state: { offerDetail: OfferDetailStateType }) => state.offerDetail.nearbyOffers,
  selectComments: (state: { offerDetail: OfferDetailStateType }) => state.offerDetail.comments,
  selectStatus: (state: { offerDetail: OfferDetailStateType }) => state.offerDetail.status,
  selectError: (state: { offerDetail: OfferDetailStateType }) => state.offerDetail.error,
  selectFavoriteStatus: (state: { offerDetail: OfferDetailStateType }) => state.offerDetail.offer?.isFavorite,
};
