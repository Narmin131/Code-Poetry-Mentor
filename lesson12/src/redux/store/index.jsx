import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "../reducer";

export const store = configureStore({
  reducer: {
    CounterReducer,
  },
});

// reducer (state, action)
// store(reducer)
