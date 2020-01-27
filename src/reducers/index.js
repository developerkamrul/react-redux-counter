import { combineReducers } from "redux";

const countReducer = (initialState = 0, action) => {
  if (action.type === "INCREMENT") {
    console.log("+");
    return initialState + 1;
  }
  if (action.type === "DECREMENT") {
    console.log("+");
    return initialState - 1;
  }
  if (action.type === "RESET") {
    console.log("+");
    return 0;
  }
  return initialState;
};

export default combineReducers({ count: countReducer });
