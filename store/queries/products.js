import api from ".";

export const bulletinQueries = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ["products"],
      transformResponse: (response) => {
        return response.data; // TODO create a generic transform
      },
    }),
    registerProduct: builder.mutation({
      query: (payload) => ({
        url: `/products/`,
        method: "post",
        body: payload,
      }),
      transformResponse: (response) => {
        return response.data; // TODO create a generic transform
      },
      invalidatesTags: ["products"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useRegisterProductMutation } =
  bulletinQueries;
