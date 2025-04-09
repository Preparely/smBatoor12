// src/redux/api/apiSlice.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import appConfig from "../appConfig";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.baseURL,
    // baseURL : "https://batoorapi.steamminds.org/batoor/",


    prepareHeaders: (headers, { getState }) => {
     const token = getState()?.auth?.token || JSON.parse(sessionStorage.getItem("access"));
      const username = getState()?.auth?.username;
      const customerId = sessionStorage.getItem("customer_id");

      headers.set("Content-Type", "application/json");
      // headers.set("Access-Control-Allow-Origin", "*");
      // headers.set("Access-Control-Allow-Headers", "*");
      // headers.set("Access-Control-Allow-Credentials", "true");

      if (token) headers.set("Authorization", `Bearer ${token}`);
      if (username) headers.set("username", username);
      if (customerId) headers.set("customer_id", customerId);

      return headers;
    },
  }),
  tagTypes: [
    "Auth", "User", "Profile", "Login"

  ], // Customize these as per your app


  endpoints: (builder) => ({}),
});
