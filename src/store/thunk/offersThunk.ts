import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OffersType } from '../../types/offers';
import { Endpoint } from '../../const';

export const fetchAllOffers = createAsyncThunk<OffersType, undefined, { extra: AxiosInstance }>('fetchOffers/all', async (_arg, { extra: api }) => {
  try {
    const response = await api.get<OffersType>(Endpoint.Offers);
    return response.data;
  } catch (error) {
    throw new Error('Error Loading');
  }
});

