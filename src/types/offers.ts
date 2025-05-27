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

export type OffersType = OfferType[];
