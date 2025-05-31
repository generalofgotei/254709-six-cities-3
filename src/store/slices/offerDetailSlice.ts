import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import type { OfferDetailStateType } from '../../types/offers';
import type { OfferDetailType, NearbyOffersType, CommentsType } from '../../types/offers';

import {
  fetchOfferDetail,
  fetchNearbyOffers,
  fetchComments
} from '../thunk/offerDetailThunk';

const initialState: OfferDetailStateType = {
  offer: null,
  nearbyOffers: [],
  comments: [],
  status: RequestStatus.idle,
  error: null,
};

export const offerDetailSlice = createSlice({
  name: 'offerDetail',
  initialState,
  reducers: {
    clearOfferDetail: (state) => {
      state.offer = null;
      state.nearbyOffers = [];
      state.comments = [];
      state.error = null;
      state.status = RequestStatus.idle;
    },
    setOfferDetail: (state, action: PayloadAction<OfferDetailType>) => {
      state.offer = action.payload;
    },
    setNearbyOffers: (state, action: PayloadAction<NearbyOffersType>) => {
      state.nearbyOffers = action.payload;
    },
    setComments: (state, action: PayloadAction<CommentsType>) => {
      state.comments = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch offer detail
      .addCase(fetchOfferDetail.pending, (state) => {
        state.status = RequestStatus.loading;
        state.error = null;
      })
      .addCase(fetchOfferDetail.fulfilled, (state, action) => {
        state.status = RequestStatus.success;
        state.offer = action.payload;
        state.error = null;
      })
      .addCase(fetchOfferDetail.rejected, (state, action) => {
        state.status = RequestStatus.failed;
        state.error = action.error.message || 'Error loading offer details';
      })
      // Fetch nearby offers
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.error = null;
      })
      .addCase(fetchNearbyOffers.rejected, (state, action) => {
        state.error = action.error.message || 'Error loading nearby offers';
      })
      // Fetch comments
      .addCase(fetchComments.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.error = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.error = action.error.message || 'Error loading comments';
      });
  },
});

export const {
  clearOfferDetail,
  setOfferDetail,
  setNearbyOffers,
  setComments,
} = offerDetailSlice.actions;

export default offerDetailSlice.reducer;
