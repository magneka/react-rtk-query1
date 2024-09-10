import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './services/pokemon';
import counterReducer from './slices/count';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
