import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";

export interface IMealItem {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
}

const MealItem: React.FC<Partial<IMealItem>> = ({
  id,
  name,
  description,
  price,
}) => {
  const ctxCart = React.useContext(CartContext);
  const formatedPrice = `$${price && price.toFixed(2)}`;

  const addItemToCartHandler = (amount: number) => {
    ctxCart.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
