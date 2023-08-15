import { configureStore } from '@reduxjs/toolkit';
import loading from './slices/Loading';

export const store = configureStore({
  reducer: {
    loading
  },
})