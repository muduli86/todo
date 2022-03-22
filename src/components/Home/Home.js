import React from "react";
import { Grid } from "@mui/material";
import Calender from "../Calender/Calender";
import ToDoCards from "../ToDoCards/ToDoCards";
import { TodoProvider } from "../../context/TodoProvider";

const Home = () => {
  return (
    <TodoProvider>
      <Grid container sx={{ display: "flex", margin: "10px 5px" }}>
        <Grid item xs={12} md={3}>
          <Calender />
        </Grid>
        <Grid item xs={12} md={7}>
          <ToDoCards />
        </Grid>
      </Grid>
    </TodoProvider>
  );
};

export default Home;
