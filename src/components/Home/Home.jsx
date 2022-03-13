import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>8</h1>
        </Grid>
        <Grid item xs={4}>
          <h1>4</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
