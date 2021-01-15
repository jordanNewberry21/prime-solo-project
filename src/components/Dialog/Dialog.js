import React, { useState } from 'react';

// material-ui
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// components
import AddItemForm from '../AddItemForm/AddItemForm';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);

  // item as props being passed to the form component called below
  const itemToUpdate = props.itemToUpdate;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please update the desired fields. 
            This form has been auto-populated with the current stored information.
          </DialogContentText>
          <AddItemForm handleClose={handleClose} itemToUpdate={itemToUpdate} />
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}