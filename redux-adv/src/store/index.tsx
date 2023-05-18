import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import UIReducer from "./ui-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    UI: UIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
