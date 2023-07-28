import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { useState } from "react";
import { Fragment } from "react";

export default function Counter() {
  const [isCounter, setIsCounter] = useState(false);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  function incrementHandler() {
    dispatch({ type: "increment" });
  }

  function decrementHandler() {
    dispatch({ type: "decrement" });
  }

  function increaseHandler() {
    dispatch({ type: "increa", amount: 5 });
  }

  function resetHandler() {
    dispatch({ type: "reset" });
  }

  function toggleCounterHandler() {
    setIsCounter(!isCounter);
  }

  const counterContent = (
    <Fragment>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
        <div>
          <button onClick={resetHandler}>RESET</button>{" "}
        </div>
      </div>
    </Fragment>
  );

  return (
    <main className={classes.counter}>
      {isCounter && counterContent}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
