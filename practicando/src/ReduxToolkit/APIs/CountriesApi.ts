import { ICountrie } from '@/interfaces/Countries';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  reducerPath: 'CountriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<ICountrie[], undefined>({
      query: () => `/countries`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCountriesQuery } = countriesApi;
