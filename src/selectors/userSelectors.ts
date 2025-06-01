import type { RootState } from '../types/store';

export const userSelectors = {
  selectAuthStatus: (state: RootState) => state.user.authorizationStatus,
  selectEmail: (state: RootState) => state.user.email,
};
