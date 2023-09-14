import { configureStore } from '@reduxjs/toolkit';
import loading from './slices/Loading';
import lang from './slices/Lang';
import auth from './slices/Auth';
import categories from './slices/Categories';
import permissons from './slices/Permissions';

export const store = configureStore({
  reducer: {
    loading,
    lang,
    auth,
    categories,
    permissons
  },
})