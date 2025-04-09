import { apiSlice } from "../../../Api/apiSlice";

export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    LoginHandler: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Login']
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginHandlerMutation,
  useLogoutMutation
} = loginApiSlice;
