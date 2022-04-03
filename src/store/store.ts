import { configureStore } from "@reduxjs/toolkit";
import { catsApi } from "../services/cats";
import { catsLayout } from "./reducer";

export const store = configureStore({
  reducer: {
    catsLayout,
    [catsApi.reducerPath]: catsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(catsApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
