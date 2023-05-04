import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import { IMealItem } from "../Meals/MealItem/MealItem";

const HeaderCartButton: React.FC = () => {
  const [btnIshighlighted, setBtnIsHighlighted] = React.useState(false);
  const { onShowCart, items } = React.useContext(CartContext);
  const numberOfCartItems = items.reduce((curNumber, item: IMealItem) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIshighlighted ? styles.bump : ""}`;

  React.useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const btnTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(btnTimer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
