import { useContext, useReducer, createContext } from "react";
import moment from "moment";

const TodoContext = createContext({});

let initialState = {
  selectedDate: moment(new Date()).format("MM-DD-YYYY"),
};

let reducer = (state, action) => {
  switch (action.type) {
    case "SETDATE":
      return {
        ...state,
        selectedDate: moment(action.payload).format("MM-DD-YYYY"),
      };
    default:
      return initialState;
  }
};

const TodoProvider = (props) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);

export { TodoProvider, useTodoContext };
