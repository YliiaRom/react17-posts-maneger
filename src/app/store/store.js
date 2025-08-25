import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/features/auth/api/authSlice";
import { baseApi } from "@/shared/api/baseApi";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
