import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import type { OfferDetailStateType } from '../../types/offers';

import {
  fetchOfferDetail,
  fetchNearbyOffers,
  fetchComments,
  toggleFavoriteStatus,
  sendComment
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
  reducers: {},
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
      })
      // Toggle favorite status
      .addCase(toggleFavoriteStatus.pending, (state) => {
        state.error = null;
      })
      .addCase(toggleFavoriteStatus.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.error = null;
      })
      .addCase(toggleFavoriteStatus.rejected, (state, action) => {
        state.error = action.error.message || 'Error toggle favorite status';
      })
      // Post comment
      .addCase(sendComment.pending, (state) => {
        state.error = null;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.error = null;
      })
      .addCase(sendComment.rejected, (state, action) => {
        state.error = action.error.message || 'Comment didnt send';
      });
  },
});

export default offerDetailSlice.reducer;
