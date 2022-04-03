import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IBreed } from "types";

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

export const { useGetBreedsQuery } = catsApi;
