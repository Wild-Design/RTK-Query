import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = process.env.REACT_APP_API || 'http://localhost:3005';

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),

  tagTypes: ['Posts'],

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),
    getPostById: builder.query({
      query: (postId) => '/posts/' + postId,
      providesTags: ['Posts'],
      // keepUnusedDataFor: 5,  este metodo sirve para persistir la informacion en el cache el tiempo que le indiquemos.
    }),
    addNewPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'post',
        body: newPost,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useAddNewPostMutation } =
  postsApi;
