// services/OppsApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Opportunity, OpportunitiesResponse } from "../types/Type";

export const OppsApi = createApi({
  reducerPath: "allProducts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    getAllOpps: builder.query<OpportunitiesResponse, void>({
      query: () => "/opportunities/search",
    }),
    getOppById: builder.query<Opportunity, string>({
      query: (id: string) => `/opportunities/${id}`,
    }),
  }),
});

export const { useGetAllOppsQuery, useGetOppByIdQuery } = OppsApi;