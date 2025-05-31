import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities } from '../../const';
import { RequestStatus } from '../../const';
import type { OffersStateType, OffersType } from '../../types/offers';
import { fetchAllOffers } from '../thunk/offersThunk';

const initialState: OffersStateType = {
  city: Cities[0],
  offers: [],
  status: RequestStatus.idle,
  error: null,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<(typeof Cities)[number]>) => {
      state.city = action.payload;
    },
    initOffers: (state, action: PayloadAction<OffersType>) => {
      state.offers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.loading;
        state.error = null;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.success;
        state.offers = action.payload;
        state.error = null;
      })
      .addCase(fetchAllOffers.rejected, (state, action) => {
        state.status = RequestStatus.failed;
        state.error = action.error.message || 'Loading error';
      });
  },
});

// Экспортируем экшены
export const {
  setCity,
  initOffers,
} = offersSlice.actions;

export default offersSlice.reducer;
