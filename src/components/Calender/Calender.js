import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { useDateContext } from "../../context/DateProvider";

export default function Calender({ parentCallback }) {
  const [date, setDate] = React.useState(new Date());
  const dateContext = useDateContext();

  const onTrigger = (newDate) => {
    setDate(newDate);
    parentCallback(newDate);
  };

  const changeHandler = (newDate) => {
    setDate(newDate);
    console.log(dateContext);
    dateContext.setDate(date);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* <CalendarPicker
          date={date}
          onChange={(newDate) => onTrigger(newDate)}
        /> */}
        <CalendarPicker
          date={date}
          onChange={(newDate) => changeHandler(newDate)}
        />
      </LocalizationProvider>
    </>
  );
}
