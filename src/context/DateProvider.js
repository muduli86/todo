import { useState, useMemo, useContext, createContext } from "react";

const DateContext = createContext({});

const DateProvider = ({ initialState = {}, children }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const value = useMemo(
    () => ({
      setDate: (selectedDate) => {
        setSelectedDate(selectedDate);
      },
    }),
    []
  );

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

const useDate = () => useContext(DateContext);

export { DateProvider, useDate };
