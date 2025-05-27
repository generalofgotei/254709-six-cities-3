import { OffersType } from './offers';
import type {store} from '../store';
import { Cities } from '../const';

export type OffersState = {
  city: (typeof Cities)[number];
  offers: OffersType;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

