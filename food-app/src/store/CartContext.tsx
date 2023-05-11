import React from "react";

interface ICartMeal {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
}

interface IAction {
  type: "ADD" | "REMOVE" | "CLEAR";
  item: ICartMeal;
  id: string;
}

const defaultCartState: { items: any[]; totalAmount: number } = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (
  state: { items: ICartMeal[]; totalAmount: number },
  action: Partial<IAction>
) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item!.price * action.item!.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item!.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems: ICartMeal[];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item!.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item!);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: Partial<ICartMeal>) => {},
  removeItem: (id: string) => {},
  isCartIsShown: false,
  onShowCart: () => {},
  onHideCart: () => {},
  clearCart: () => {},
});

export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const [cartState, dispatchCartAction] = React.useReducer(
    cartReducer,
    defaultCartState
  );

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addItemToCartHandler = (item: ICartMeal) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    isCartIsShown: cartIsShown,
    onShowCart: showCartHandler,
    onHideCart: hideCartHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    // @ts-ignore
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
