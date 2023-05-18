import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../components/Cart/Cart";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false,
};

export interface IState {
  cartItems: ICartItem[];
  totalQuantity: number;
  totalAmount: number;
  changed: boolean;
}

interface IAddItem {
  id: string;
  price: number;
  title: string;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(
      state: IState,
      action: PayloadAction<{ totalQuantity: number; items: ICartItem[] }>
    ) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cartItems = action.payload.items;
    },

    addItemToCart(state: IState, action: PayloadAction<IAddItem>) {
      const addingItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.itemId === addingItem.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.cartItems.push({
          itemId: addingItem.id,
          price: addingItem.price,
          quantity: 1,
          totalPrice: addingItem.price,
          name: addingItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + addingItem.price;
      }
    },

    removeItemFromCart(state: IState, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.cartItems.find(
        (item: ICartItem) => item.itemId === id
      );
      state.totalQuantity--;
      state.changed = true;
      if (existingItem?.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.itemId !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, replaceCart } =
  cartSlice.actions;
export default cartSlice.reducer;
