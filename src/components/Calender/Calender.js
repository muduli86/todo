import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { DateProvider } from "../../context/DateProvider";
import moment from "moment";

export default function Calender() {
  const [date, setDate] = React.useState(new Date());

  return (
    <DateProvider value={moment(date).format("MM-DD-YYYY")}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
      </LocalizationProvider>
    </DateProvider>
  );
}
