import { Cities, RequestStatus } from '../const';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type RequestStatusType = typeof RequestStatus[keyof typeof RequestStatus];

export type OffersState = {
  city: (typeof Cities)[number];
  offers: OffersType;
  status: RequestStatusType;
  error: string | null;
};

export type OffersType = OfferType[];
