import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { useTodoContext } from "../../context/TodoProvider";

export default function Calender() {
  const [date, setDate] = useState(new Date());
  const { dispatch } = useTodoContext();

  const onDateChange = (newDate) => {
    setDate(newDate);
    dispatch({ type: "SETDATE", payload: newDate });
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker
          date={date}
          onChange={(newDate) => onDateChange(newDate)}
        />
      </LocalizationProvider>
    </>
  );
}
