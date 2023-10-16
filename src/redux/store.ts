import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['meta.arg', 'meta.baseQueryMeta', 'my.action'],
      },
    }).concat(apiSlice.middleware)
  },
})
