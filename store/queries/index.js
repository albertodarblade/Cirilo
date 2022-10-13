import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "/api/";

const tagTypes = ["products", "sales"];

const api = createApi({
  reducerPath: "store",
  tagTypes,
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
  keepUnusedDataFor: 60, // set to 0 if we disable the cache feature
});

export default api;
