import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  increase,
  toggleCounter,
} from "../store/counter-slice";
import type { RootState } from "../store";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const show = useSelector((state: RootState) => state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increaseHandler = () => {
    dispatch(increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase</button>
    </main>
  );
};

export default Counter;
