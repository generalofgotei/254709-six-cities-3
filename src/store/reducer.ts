import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { offers } from '../mocks/offers';
import { OffersState } from '../types/store';
import { setCity, setOffers } from './action';

const initialState: OffersState = {
  city: Cities[0],
  offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
