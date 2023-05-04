import React from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/CartContext";

function App() {
  const { isCartIsShown: isCartOpen } = React.useContext(CartContext);

  return (
    <>
      {isCartOpen && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
