import React, { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store/index";
import Notification from "./components/UI/Notification";
import { INotification } from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import { AppDispatch } from "./store/index";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const cartIsVisible = useSelector(
    (state: RootState) => state.UI.cartIsVisible
  );
  const cart = useSelector((state: RootState) => state.cart);
  const notification: INotification = useSelector(
    (state: RootState) => state.UI.notification!
  );

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && <Notification {...notification} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
