import { configureStore } from '@reduxjs/toolkit'
import currentQuerySlice from '../features/currentQuerySlice'
import { kinopoiskApi } from '../services/kinopoiskApi'

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuerySlice: currentQuerySlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch