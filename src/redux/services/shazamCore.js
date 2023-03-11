import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0',

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'ee77eae60cmshbf83137c7cc8123p110ceejsna65ffcca7f5a');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => 'charts/track?locale=en-US&pageSize=20&startFrom=0',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
