import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const GlobalState = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      setState(res.data.products);
    });
  }, []);
  return (
    <GlobalState.Provider value={{ state, setState }}>
      {children}
    </GlobalState.Provider>
  );
};
