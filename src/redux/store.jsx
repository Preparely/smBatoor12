import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../Api/authSlice";
import { apiSlice } from "../Api/apiSlice";

// Define persist configuration for menuData and patientList
const menuDataPersistConfig = {
  key: "menuData",
  storage,
};

const patientListPersistConfig = {
  key: "patientList",
  storage,
};

// Agar aapke paas actual reducers nahin hain, to temporary dummy reducers define kar sakte hain
const MenuData = (state = {}, action) => state;
const PatientListSlice = (state = {}, action) => state;

const persistedMenuDataReducer = persistReducer(menuDataPersistConfig, MenuData);
const persistedPatientListReducer = persistReducer(patientListPersistConfig, PatientListSlice);

// Configure Store with persisted reducers
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    menuData: persistedMenuDataReducer,
    patientList: persistedPatientListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: true,
});

// Persistor
export const persistor = persistStore(store);

// RTK Query setup
setupListeners(store.dispatch);
