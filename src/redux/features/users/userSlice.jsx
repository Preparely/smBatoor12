import { apiSlice } from "../../../Api/apiSlice";

export const UserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Existing GetUser query
    GetUser: builder.query({
      query: () => ({
        url: `user`, // Fetch all users
        method: 'GET',
      }),
      providesTags: ['USER'],
    }),

    // New DeleteUser mutation
    DeleteUser: builder.mutation({
      query: (userId) => ({
        url: `user/delete/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['USER'],
    }),

    // New Block/Unblock User mutation with correct method
    ToggleBlockUser: builder.mutation({
      query: (userId) => ({
        url: `user/toggle-block/${userId}`,
        method: 'PUT',  // Change POST to PUT if that's what the API requires
      }),
      invalidatesTags: ['USER'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useDeleteUserMutation,
  useToggleBlockUserMutation,  // Exporting the toggle block/unblock mutation
} = UserApiSlice;
