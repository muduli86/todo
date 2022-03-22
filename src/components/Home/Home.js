import React from "react";
import { Grid } from "@mui/material";
import Calender from "../Calender/Calender";
import ToDoCards from "../ToDoCards/ToDoCards";
import { DateProvider } from "../../context/DateProvider";
import moment from "moment";

const Home = () => {
  const [date, setDate] = React.useState(
    moment(new Date()).format("MM-DD-YYYY")
  );

  const handleCallback = (childData) => {
    setDate(moment(childData).format("MM-DD-YYYY"));
  };
  return (
    <DateProvider>
      <Grid container sx={{ display: "flex", margin: "10px 5px" }}>
        <Grid item xs={12} md={3}>
          {/* <Calender parentCallback={handleCallback} /> */}
          <Calender />
        </Grid>
        <Grid item xs={12} md={7}>
          <ToDoCards />
        </Grid>
      </Grid>
    </DateProvider>
  );
};

export default Home;

//https://github.com/johnpaulchandy/toDoPlanner
