import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = process.env.REACT_APP_API || 'http://localhost:3005';

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getPostById: builder.query({
      query: (postId) => '/posts/' + postId,
      // keepUnusedDataFor: 5,  este metodo sirve para persistir la informacion en el cache el tiempo que le indiquemos.
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
