import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OfferDetailType, NearbyOffersType, CommentsType } from '../../types/offers';
import { Endpoint } from '../../const';

export const fetchOfferDetail = createAsyncThunk<
  OfferDetailType,
  string,
  { extra: AxiosInstance }
>('offerDetail/fetchOfferDetail', async (offerId, { extra: api }) => {
  try {
    const response = await api.get<OfferDetailType>(`${Endpoint.Offers}/${offerId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error loading offer details');
  }
});

export const fetchNearbyOffers = createAsyncThunk<
  NearbyOffersType,
  string,
  { extra: AxiosInstance }
>('offerDetail/fetchNearbyOffers', async (offerId, { extra: api }) => {
  try {
    const response = await api.get<NearbyOffersType>(`${Endpoint.Offers}/${offerId}/nearby`);
    return response.data;
  } catch (error) {
    throw new Error('Error loading nearby offers');
  }
});

export const fetchComments = createAsyncThunk<
  CommentsType,
  string,
  { extra: AxiosInstance }
>('offerDetail/fetchComments', async (offerId, { extra: api }) => {
  try {
    const response = await api.get<CommentsType>(`${Endpoint.Comments}/${offerId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error loading comments');
  }
});

export const toggleFavoriteStatus = createAsyncThunk<
  OfferDetailType,
  { offerId: string; status: 0 | 1 },
  { extra: AxiosInstance }
>('offerDetail/toggleFavoriteStatus', async ({ offerId, status }, { extra: api }) => {
  try {
    const response = await api.post<OfferDetailType>(`${Endpoint.Favorite}/${offerId}/${status}`);
    return response.data;
  } catch (error) {
    throw new Error('Error toggle favorite status');
  }
});

// Пост коммента
export const sendComment = createAsyncThunk<
  CommentsType,
  { offerId: string; review: {comment: string; rating: number} },
  { extra: AxiosInstance }
>(
  'offerDetail/postComment',
  async ({ offerId, review }, { extra: api }) => {
    try {
      const response = await api.post<CommentsType>(`${Endpoint.Comments}/${offerId}`, review);
      return response.data;
    } catch (error) {
      throw new Error('Error posting comment');
    }
  }
);
