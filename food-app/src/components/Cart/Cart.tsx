import React, { useState } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import { IMealItem } from "../Meals/MealItem/MealItem";
import CartItem from "./CartItem";
import Checkout, { IUserData } from "./Checkout";
import { BASE_URL } from "../Meals/AvaliableMeals";
import axios from "axios";

const Cart: React.FC = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { onHideCart, items, totalAmount, addItem, removeItem, clearCart } =
    React.useContext(CartContext);
  const totalAmountFixed = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item: Partial<IMealItem>) => {
    addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout((prev) => !prev);
  };

  const submitOrderHandler = async (userData: IUserData) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${BASE_URL}/orders.json`, {
        user: userData,
        orderedItems: items,
      });
      setIsSubmitting(false);
      setDidSubmit(true);
      clearCart();
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      onHideCart();
    }, 1500);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {items.map((item: IMealItem) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmountFixed}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={onHideCart} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <p>Successfully sent the order</p>;

  return (
    <Modal>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
