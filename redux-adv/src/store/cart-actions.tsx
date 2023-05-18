import { showNotification } from "./ui-slice";
import { AppDispatch } from "./index";
import { IState } from "./cart-slice";
import { replaceCart } from "./cart-slice";

// Redux Thunk

export const sendCartData = (cart: IState) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-45a66-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!res.ok) {
        throw new Error("Sending data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://react-http-45a66-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );
      if (!res.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchData();

      dispatch(
        replaceCart({
          items: cartData.cartItems || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
