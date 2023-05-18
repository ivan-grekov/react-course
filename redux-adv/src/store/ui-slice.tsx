import { createSlice } from "@reduxjs/toolkit";
import { INotification } from "../components/UI/Notification";

const initialUIState = {
  cartIsVisible: false,
  notification: null,
};

const UISlice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    toggleCartVisible(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(
      state: { cartIsVisible: boolean; notification: null | INotification },
      action
    ) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggleCartVisible, showNotification } = UISlice.actions;
export default UISlice.reducer;
