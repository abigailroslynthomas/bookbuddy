import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/users/me",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    getReservations: builder.query({
      query: () => ({
        url: "/reservations",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetReservationsQuery } = userApi;
