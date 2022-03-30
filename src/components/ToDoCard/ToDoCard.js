import React, { useState } from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ToDoForm from "./ToDoForm";

const ToDoCard = ({ item }) => {
  const [editForm, setEditForm] = useState(false);

  const editClickHandler = () => {
    setEditForm(true);
  };

  const deleteClickHandler = () => {
    console.log("delete");
  };

  const formItems = ["Description", "Due Date"];

  return (
    <>
      <Box sx={{ minWidth: 150, margin: 1 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.description}
            </Typography>
            <IconButton aria-label="edit" onClick={editClickHandler}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={deleteClickHandler}>
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      </Box>
      {editForm && (
        <ToDoForm
          title="Edit"
          item={item}
          openForm={editForm}
          formItems={formItems}
          setOpenForm={setEditForm}
        />
      )}
    </>
  );
};

export default ToDoCard;
