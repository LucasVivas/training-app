import React from 'react';
import Proptypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AddExerciceForm({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Record Exercice</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter your new record 🏅</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Exercice"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}

AddExerciceForm.propTypes = {
  open: Proptypes.bool,
  handleClose: Proptypes.func
};

AddExerciceForm.defaultProps = {
  open: null,
  handleClose: null
};

export default AddExerciceForm;
