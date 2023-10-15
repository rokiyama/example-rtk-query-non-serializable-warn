import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['my.action'],
      },
    }).concat(apiSlice.middleware)
  },
})
