import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementFunc, decrementFunc, resetFunc } from "../redux/action/index";
const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.CounterReducer);
  // const login = localStorage.getItem('login') ? '/checkout' ? 'alert'
  return (
    <>
      <span>{counter}</span>
      <button onClick={() => dispatch(incrementFunc())}>+</button>
      <button onClick={() => dispatch(decrementFunc())}>-</button>
      <button onClick={() => dispatch(resetFunc())}>reset</button>
      <h1>salam</h1>
      <button>Buy now</button>
    </>
  );
};

export default Home;
