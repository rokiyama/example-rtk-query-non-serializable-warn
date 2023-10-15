import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<
      Array<{
        id: string
        title: string
      }>,
      void
    >({
      query: () => '/posts',
      providesTags: (result = []) => [
        'Post',
        ...result.map(({ id }) => ({ type: 'Post' as const, id })),
      ],
    }),
  }),
})

export const { useGetPostsQuery } = apiSlice
