import api from ".";

export const bulletinQueries = api.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: ({ startDate, endDate }) =>
        `sales?startDate=${startDate}&endDate=${endDate}`,
      providesTags: ["sales"],
      transformResponse: (response) => {
        return response.data; // TODO create a generic transform
      },
    }),
    registerSale: builder.mutation({
      query: (payload) => ({
        url: `/sales/`,
        method: "post",
        body: payload,
      }),
      transformResponse: (response) => {
        return response.data; // TODO create a generic transform
      },
      invalidatesTags: ["sales"],
    }),
    deleteSale: builder.mutation({
      query: (saleId) => ({
        url: `/sales/${saleId}`,
        method: "delete",
      }),
      transformResponse: (response) => {
        return response.data; // TODO create a generic transform
      },
      invalidatesTags: ["sales"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetSalesQuery,
  useRegisterSaleMutation,
  useDeleteSaleMutation,
} = bulletinQueries;
