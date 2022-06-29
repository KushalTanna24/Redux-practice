import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";

import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((managedData) => managedData.counter.counter);
  const showCounter = useSelector(
    (managedData) => managedData.counter.showCounter
  );
  const isAuth = useSelector((managedData) => managedData.auth.isAuthenticated);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const afterLogin = (
    <Fragment>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </Fragment>
  );
  return (
    <main className={classes.counter}>
      {isAuth ? afterLogin : <h1>Please login</h1>}
    </main>
  );
};

export default Counter;
