import { createAction } from '@reduxjs/toolkit';
import { OffersType } from '../types/offers';

export const setCity = createAction<string>('offers/setCity');
export const setOffers = createAction<OffersType>('offers/setOffers');
