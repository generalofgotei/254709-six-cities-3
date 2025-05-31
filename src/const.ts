export const BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';
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
