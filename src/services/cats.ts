// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IBreed } from "types";

// Define a service using a base URL and expected endpoints
export const catsApi = createApi({
  reducerPath: "catsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1",
    prepareHeaders: (headers, { getState }) => {
      headers.set("x-api-key", "0c8e0b73-6e3e-40d9-94d8-ea4d4bc25a68");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set(
        "access-control-allow-headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      // access-control-allow-headers: Origin, X-Requested-With, Content-Type, Accept
      headers.set("Content-Type", "application/json; charset=utf-8");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query<IBreed[], void>({
      query: () => `breeds?limit=12`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBreedsQuery } = catsApi;
