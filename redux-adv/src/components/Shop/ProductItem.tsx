import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/index";
import { addItemToCart } from "../../store/cart-slice";

export interface IProductItem {
  id: string;
  title: string;
  price: number;
  description: string;
}

const ProductItem: React.FC<IProductItem> = ({
  id,
  title,
  price,
  description,
}) => {
  const itemsInCart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
