import { IFullDataUser } from '@/interfaces/TaskEase';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'TaskEaseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    welcome: builder.query({
      query: () => `/`,
    }),
    getTasks: builder.query({
      query: () => `/task`,
    }),
    getLists: builder.query({
      query: () => `/list`,
    }),
    getFullDataUser: builder.query<
      IFullDataUser,
      { user_name: string; password: string }
    >({
      query: ({
        user_name,
        password,
      }: {
        user_name: string;
        password: string;
      }) => `/user/login/${user_name}/${password}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useWelcomeQuery,
  useGetTasksQuery,
  useGetListsQuery,
  useGetFullDataUserQuery,
} = pokemonApi;
