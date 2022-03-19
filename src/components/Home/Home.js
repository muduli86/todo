import React from "react";

import Calender from "../Calender/Calender";
import ToDoCards from "../ToDoCards/ToDoCards";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ border: "1px solid", display: "flex", margin: "100px" }}>
      <ToDoCards />
      <Calender />
    </Box>
  );
};

export default Home;
