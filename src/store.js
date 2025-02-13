import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import { bookApi } from "./bookSlice.js";
import { userApi } from "./userSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware, userApi.middleware),
});

export default store;
