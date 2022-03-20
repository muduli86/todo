import { useContext, createContext } from "react";

const DateContext = createContext({});

const DateProvider = (props) => {
  return (
    <DateContext.Provider value={props.value}>
      {props.children}
    </DateContext.Provider>
  );
};

const useDateContext = () => useContext(DateContext);

export { DateProvider, useDateContext };
