import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export interface ICartItem {
  id?: string;
  itemId: string;
  quantity: number;
  price: number;
  totalPrice: number;
  name: string;
}

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const cartContent =
    cartItems?.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      cartItems.map((cartItem: ICartItem) => (
        <CartItem
          item={{
            id: cartItem.itemId,
            title: cartItem.name,
            quantity: cartItem.quantity,
            total: cartItem.totalPrice,
            price: cartItem.price,
          }}
          key={cartItem.itemId}
        />
      ))
    );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartContent}</ul>
    </Card>
  );
};

export default Cart;
