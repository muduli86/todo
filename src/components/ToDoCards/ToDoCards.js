import React from "react";
import { useGetTodoItems } from "../../queries";
import ToDoCard from "../ToDoCard/ToDoCard";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { useDateContext } from "../../context/DateProvider";

const Data = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <Grid item xs={6} md={3} key={item.id}>
            <ToDoCard item={item} />
          </Grid>
        );
      })}
    </>
  );
};

const ToDoCards = () => {
  const dateContext = useDateContext();

  const { isLoading, isSuccess, data, isError, error } = useGetTodoItems(
    dateContext.date
  );

  return (
    <>
      <Card sx={{ margin: 2 }}>
        <Grid container>
          {isLoading && <h1>Loading</h1>}
          {isError && <h1>Error + {error} </h1>}
          {isSuccess && <Data data={data} />}
          <Box sx={{ minWidth: 150, margin: 1 }}>
            <Card variant='outlined'>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color='text.secondary'
                  gutterBottom
                >
                  add new
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Card>
    </>
  );
};

export default ToDoCards;
