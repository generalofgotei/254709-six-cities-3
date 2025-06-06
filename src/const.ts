export const BASE_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const API_TIMEOUT = 5000;

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
} as const;

export const Endpoint = {
  Offers: '/offers',
  Favorite: '/favorite',
  Login: '/login',
  Logout: '/logout',
  Comments: '/comments',
} as const;

export const AuthorizationStatus = {
  NoAuth: 'NO AUTH',
  Auth: 'AUTH',
  Unknown: 'UNKNOWN',
} as const;

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export const rating = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
] as const;

export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const sortingOptions = {
  popular: 'Popular',
  lowToHigh: 'Price: low to high',
  highToLow: 'Price: high to low',
  topRated: 'Top rated first',
} as const;

export const RequestStatus = {
  idle: 'Idle',
  loading: 'Loading',
  success: 'Success',
  failed: 'Failed'
} as const;

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;

export const FAVORITE_IMAGE_WIDTH = 150;
export const FAVORITE_IMAGE_HEIGHT = 110;
export const OFFER_IMAGE_WIDTH = 260;
export const OFFER_IMAGE_HEIGHT = 200;

export const CARD_ICON_WIDTH = 18;
export const CARD_ICON_HEIGHT = 19;
export const OFFER_ICON_WIDTH = 31;
export const OFFER_ICON_HEIGHT = 33;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_NEARBY_OFFERS_ON_MAP = 3;
