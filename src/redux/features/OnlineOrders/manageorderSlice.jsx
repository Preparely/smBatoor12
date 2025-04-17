import { apiSlice } from "../../../Api/apiSlice";


export const OrderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetOrderHistory: builder.query({
      query: () => ({
        url: `orders/admin/history`,
        method: 'GET',
      }),
      providesTags: ['ORDER_HISTORY'],
    }),

    updateOrderStatus: builder.mutation({
      query: ({ id, body }) => ({
        url: `orders/confirm-order/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['ORDER_HISTORY'],
    }),

    cancelOrder: builder.mutation({
      query: ({ id, body }) => ({
        url: `orders/cancel/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['ORDER_HISTORY'],
    }),
  }),
});
export const {
  useGetOrderHistoryQuery,
  useUpdateOrderStatusMutation,
  useCancelOrderMutation,
} = OrderApiSlice;

// import { apiSlice } from "../../../Api/apiSlice";

// export const OrderApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     GetOrderHistory: builder.query({
//       query: () => ({
//         url: `orders/admin/history`,
//         method: 'GET',
//       }),
//       providesTags: ['ORDER_HISTORY'],
//     }),
//   }),
// });

// export const {
//   useGetOrderHistoryQuery,
// } = OrderApiSlice;
