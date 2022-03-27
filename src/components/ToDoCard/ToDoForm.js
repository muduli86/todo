import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ToDoForm = (props) => {
  const [openForm, setOpenForm] = useState(props.openForm);

  const handleClose = () => {
    setOpenForm(false);
  };
  return (
    <Dialog open={openForm} onClose={handleClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          id='outlined-helperText'
          margin='dense'
          fullWidth
          label={props.formItems[1]}
          defaultValue={props.item.dueDate}
          helperText={props.item.dueDate}
          sx={{
            width: "20ch",
          }}
        />

        <TextField
          margin='dense'
          fullWidth
          required
          id='outlined-multiline-static'
          label={props.formItems[0]}
          multiline
          rows={4}
          defaultValue={props.item.description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ToDoForm;
