import { configureStore } from '@reduxjs/toolkit'
import currentQueryReducer from '../features/currentQuerySlice'
import { kinopoiskApi } from '../services/kinopoiskApi'
import searchQueryReducer from '../features/searchQuerySlice'

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuerySlice: currentQueryReducer,
    searchQuerySlice: searchQueryReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch