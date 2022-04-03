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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
