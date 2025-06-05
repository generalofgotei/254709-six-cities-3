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

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferDetailType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
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

export type OffersType = OfferType[];

export type Comment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type CommentsType = Comment[];

type RequestStatusType = (typeof RequestStatus)[keyof typeof RequestStatus];

export type OffersStateType = {
  city: (typeof Cities)[number];
  offers: OffersType;
  favoriteOffers: OffersType;
  status: RequestStatusType;
  error: string | null;
};

export type OfferDetailStateType = {
  offer: OfferDetailType | null;
  nearbyOffers: OffersType;
  comments: CommentsType;
  status: (typeof RequestStatus)[keyof typeof RequestStatus];
  error: string | null;
};
