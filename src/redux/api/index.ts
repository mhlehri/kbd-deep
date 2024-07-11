import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1000/api" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
  }),
});

export const { useGetProductsQuery } = baseApi;
