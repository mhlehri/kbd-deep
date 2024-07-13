import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kbd-deep-server.vercel.app/api",
  }),
  tagTypes: ["products"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (search) => {
        const params = new URLSearchParams();

        if (search) {
          params.append("search", search);
        }

        return {
          url: `/products`,
          method: "GET",
          params,
        };
      },
      providesTags: [{ type: "products" }],
    }),

    getProductBySlug: builder.query({
      query: (slug) => ({
        url: `/products/${slug}`,
        method: "GET",
      }),
      providesTags: [{ type: "products" }],
    }),

    addProduct: builder.mutation({
      query: (body) => {
        return {
          url: "/products",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["products"],
    }),

    removeProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),

    updateProduct: builder.mutation({
      query: ({ _id, ...body }) => {
        return {
          url: `/products/${_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useAddProductMutation,
  useRemoveProductMutation,
  useUpdateProductMutation,
} = baseApi;
