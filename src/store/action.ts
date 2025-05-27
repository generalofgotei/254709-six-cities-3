import { createAction } from '@reduxjs/toolkit';
import { OffersType } from '../types/offers';
import { Cities } from '../const';

export const setCity = createAction<(typeof Cities)[number]>('offers/setCity');
export const initOffers = createAction<OffersType>('offers/initOffers');
