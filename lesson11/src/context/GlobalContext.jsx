import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const GlobalState = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      setData(res.data.products);
    });
  }, []);
  return (
    <GlobalState.Provider value={{ data, setData }}>
      {children}
    </GlobalState.Provider>
  );
};
