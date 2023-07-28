import { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store";

export default function Counter() {
  const [isCounter, setIsCounter] = useState(false);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  function increaseHandler() {
    dispatch(counterActions.increase(10));
  }

  function decreaseHandler() {
    dispatch(counterActions.decrease(5));
  }

  function resetHandler() {
    dispatch(counterActions.reset());
  }

  function toggleCounterHandler() {
    setIsCounter(!isCounter);
  }

  const counterContent = (
    <Fragment>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
    </Fragment>
  );

  return (
    <main className={classes.counter}>
      {isCounter && counterContent}

      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementHandler}>Increment</button>
      <div>
        <button onClick={decreaseHandler}>Decrease by 5</button>
        <button onClick={increaseHandler}>Increase by 10</button>
      </div>
      <div>
        <button onClick={resetHandler}>RESET</button>
      </div>

      <div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </main>
  );
}
