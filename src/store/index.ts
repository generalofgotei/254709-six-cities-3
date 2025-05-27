import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { RootState, AppDispatch } from '../types/store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
