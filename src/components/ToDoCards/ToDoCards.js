import React, { useState } from "react";
import { useGetTodoItems } from "../../queries";
import ToDoCard from "../ToDoCard/ToDoCard";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useTodoContext } from "../../context/TodoProvider";
import ToDoForm from "../ToDoCard/ToDoForm";

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
  const { state } = useTodoContext();

  const { isLoading, isSuccess, data, isError, error } = useGetTodoItems(
    state.selectedDate
  );

  const [addForm, setAddForm] = useState(false);

  const addClickHandler = () => {
    setAddForm(true);
  };
  const formItems = ["Description", "Due Date"];

  const newItem = {
    description: "",
    dueDate: state.selectedDate,
  };

  return (
    <>
      <Card sx={{ margin: 2 }}>
        <Grid container>
          {isLoading && <h1>Loading</h1>}
          {isError && <h1>Error + {error} </h1>}
          {isSuccess && <Data data={data} />}
          <Box sx={{ minWidth: 150, margin: 1 }}>
            <Card variant="outlined">
              <CardContent>
                <IconButton aria-label="add" onClick={addClickHandler}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Card>
      {addForm && (
        <ToDoForm
          title="Add"
          item={newItem}
          openForm={addForm}
          formItems={formItems}
          setOpenForm={setAddForm}
        />
      )}
    </>
  );
};

export default ToDoCards;
