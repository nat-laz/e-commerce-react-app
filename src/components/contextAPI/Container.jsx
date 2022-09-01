import React, { useReducer } from "react";
import { MyContext } from "./context";
import reducer, {initialState} from "./reducer";


const Container = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default Container;