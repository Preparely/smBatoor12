import { apiSlice } from "../../../Api/apiSlice";

export const UserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Existing GetUser query
    GetAllComplaints: builder.query({
      query: () => ({
        url: `complaints/all`,
        method: 'GET',
      }),
      providesTags: ['USER'],
    }),

    // New DeleteUser mutation
    DeleteCompliants: builder.mutation({
      query: (userId) => ({
        url: `complaints/delete/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['USER'],
    }),
    ReplyToComplaint: builder.mutation({
      query: ({ id, reply }) => ({
        url: `complaints/reply/${id}`,
        method: 'PUT',
        body: { reply },
      }),
      invalidatesTags: ['USER'],
    }),
    

  }),
});

export const {
  useGetAllComplaintsQuery,
  useDeleteCompliantsMutation,
  useReplyToComplaintMutation,
} = UserApiSlice;
