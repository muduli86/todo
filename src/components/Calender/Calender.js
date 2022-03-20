import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";

export default function Calender({ parentCallback }) {
  const [date, setDate] = React.useState(new Date());

  const onTrigger = (newDate) => {
    setDate(newDate);
    parentCallback(newDate);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker
          date={date}
          onChange={(newDate) => onTrigger(newDate)}
        />
      </LocalizationProvider>
    </>
  );
}
