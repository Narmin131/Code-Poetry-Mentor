import { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";
export const GlobalState = createContext();

// const initalState = {
//     info : [],
//     users:[],
//     secret: {
//       key:[]
//     }
// }

const initialState = localStorage.getItem('Contacts') ? JSON.parse(localStorage.getItem('Contacts')) : []


export const GlobalProvider = ({ children }) => {
  const [state, setState] = useReducer(AppReducer, initialState);


  useEffect(()=>{
    localStorage.setItem('Contacts', JSON.stringify(state))
  }, [state])

  const addContact = (contact) => {
    setState({
      type: "ADD_CONTACT",
      payload: contact,
    });
  };

  const removeContact = (id) => {
    setState({
      type: "REMOVE_CONTACT",
      payload: id,
    });
  };

  return (
    <GlobalState.Provider
      value={{ state, setState, addContact, removeContact }}
    >
      {children}
    </GlobalState.Provider>
  );
};
