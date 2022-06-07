import { configureStore } from '@reduxjs/toolkit';
import { contactsApi, filterSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devToolsls: process.env.NODE_ENV !== 'production',
});
