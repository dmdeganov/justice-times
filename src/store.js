import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import articleReducer from "./slices/articleSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    articles: articleReducer,
  },
});
