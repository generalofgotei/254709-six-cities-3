import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { createAPI } from '../services/api';
import { RootState, AppDispatch } from '../types/store';
import offersReducer from './slices/offersSlice';


export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: {extraArgument: createAPI()}}),
  reducer: {
    offers: offersReducer,
  }
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
