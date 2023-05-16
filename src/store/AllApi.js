import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./url";

const allApi = createApi({
  reducerPath: "inventory",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  refetchOnMountOrArgChange: true,
  tagTypes: ["Canteen"],//refresh when it innvalidates
  endpoints(build) {
    return {
      fetchCanteen: build.query({
        query: ({id}) => {
          return {
            url: `/menu/${id}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.length
            ? [...result.map(({ id }) => ({ type: "Canteen", id })), "Canteen"]
            : ["Canteen"],
      }),
      fetchProduct: build.query({
        query: ({id}) => {
          return {
            url: `/product/${id}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.length
            ? [...result.map(({ id }) => ({ type: "Canteen", id })), "Canteen"]
            : ["Canteen"],
      }),
 
 
    };
  },
});

export const {
    useFetchCanteenQuery,
    useFetchProductQuery,

} = allApi;

export { allApi };





