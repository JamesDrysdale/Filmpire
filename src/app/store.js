import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import categoryOrGenreReducer from '../features/currentCategoryOrGenre';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentCategoryOrGenre: categoryOrGenreReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
