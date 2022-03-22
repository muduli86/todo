import { useContext, createContext, useState, useMemo } from "react";
import moment from "moment";

const DateContext = createContext({
  date: "",
  setDate: () => {},
});

const DateProvider = ({ children }) => {
  const [date, setDate] = useState(moment(new Date()).format("MM-DD-YYYY"));
  const value = useMemo(() => ({ date, setDate }), [date]);
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

const useDateContext = () => useContext(DateContext);

export { DateProvider, useDateContext };
