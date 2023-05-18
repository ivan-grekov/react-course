import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartVisible } from "../../store/ui-slice";
import { RootState } from "../../store";

const CartButton = () => {
  const dispatch = useDispatch();
  const badge = useSelector((state: RootState) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggleCartVisible());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
