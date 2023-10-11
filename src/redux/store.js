import { configureStore } from '@reduxjs/toolkit';
import loading from './slices/Loading';
import lang from './slices/Lang';
import auth from './slices/Auth';
import categories from './slices/Categories';
import permissons from './slices/Permissions';
import profile from './slices/Profile';
import staffs from './slices/Staffs';
import roles from './slices/Roles';

export const store = configureStore({
  reducer: {
    loading,
    lang,
    auth,
    categories,
    permissons,
    profile,
    staffs,
    roles
  },
})