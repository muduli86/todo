import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import moment from "moment";

const ToDoForm = (props) => {
  const [openForm, setOpenForm] = useState(props.openForm);
  const [value, setValue] = React.useState(
    moment(new Date(props.item.dueDate)).format("MM-DD-YYYY")
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpenForm(false);
  };
  return (
    <Dialog open={openForm} onClose={handleClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            autoFocus
            id='outlined-helperText'
            fullWidth
            label={props.formItems[1]}
            inputFormat='MM/dd/yyyy'
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

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
