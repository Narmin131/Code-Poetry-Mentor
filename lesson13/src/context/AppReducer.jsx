export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "REMOVE_CONTACT":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_CONTACT":
    default:
      return state;
  }
};
