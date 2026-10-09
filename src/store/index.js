import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import favoritesReduser from "./favorites/favoritesSlice";
import productsBuy from "./buy/buySlice";
export const store = configureStore({
  reducer: { auth: authReducer, favorite: favoritesReduser, buy: productsBuy },
});
