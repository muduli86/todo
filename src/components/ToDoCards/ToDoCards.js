import React from "react";
import { useGetTodoItems } from "../../queries";
import ToDoCard from "../ToDoCard/ToDoCard";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { useDateContext } from "../../context/DateProvider";

const Data = ({ data }) => {
  return (
    <Grid container>
      {data.map((item) => {
        return (
          <Grid item xs={12} md={3} key={item.id}>
            <ToDoCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const ToDoCards = () => {
  const selectedDate = useDateContext();

  const { isLoading, isSuccess, data, isError, error } =
    useGetTodoItems(selectedDate);

  return (
    <>
      <Card sx={{ minWidth: 600, margin: "10px" }}>
        {isLoading && <h1>Loading</h1>}
        {isError && <h1>Error + {error} </h1>}
        {isSuccess && <Data data={data} />}
        <Box sx={{ maxWidth: 120, margin: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                add new
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Card>
    </>
  );
};

export default ToDoCards;
