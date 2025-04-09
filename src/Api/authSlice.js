import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    customer_id: null,
    username: null, // add this line
  };
  
  // Add a new reducer
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      getToken: (state, { payload }) => {
        console.log("Login", payload);
        state.token = payload;
      },
      getCustomer: (state, { payload }) => {
        state.customer_id = payload;
      },
      setUsername: (state, { payload }) => { // new reducer for username
        state.username = payload;
      },
    },
  });
  export const { getToken, getCustomer, setUsername } = authSlice.actions;

export default authSlice.reducer;
