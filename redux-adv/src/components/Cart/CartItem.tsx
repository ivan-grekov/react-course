import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addItemToCart, removeItemFromCart } from "../../store/cart-slice";

interface ICartItem {
  item: {
    id: string;
    title: string;
    quantity: number;
    total: number;
    price: number;
  };
}

const CartItem: React.FC<ICartItem> = (props) => {
  const { id, title, quantity, price } = props.item;
  const totalPrice = quantity * price;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      addItemToCart({
        id,
        price,
        title,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
