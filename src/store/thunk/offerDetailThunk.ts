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
    const response = await api.get<CommentsType>(`/comments/${offerId}`);
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
