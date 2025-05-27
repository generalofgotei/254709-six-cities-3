import { OffersType } from './offers';
import type {store} from '../store';

export type OffersState = {
  city: string;
  offers: OffersType;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

