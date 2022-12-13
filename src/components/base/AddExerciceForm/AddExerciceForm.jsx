import React from 'react';
import Proptypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

/* eslint-disable react/jsx-props-no-spreading */
function AddExerciceForm({ open, handleClose, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const exerciceToAdd = {
    name: 'added',
    record: 'added',
    comment: 'added'
  };

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        // eslint-disable-next-line
        console.log(event, reason);
        onClose(exerciceToAdd);
      }}
    >
      <DialogTitle>Add Record Exercice</DialogTitle>
      <form
        onSubmit={handleSubmit((data) => {
          onClose(data);
          handleClose();
        })}
      >
        <DialogContent>
          <DialogContentText>Please enter your new record 🏅</DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Exercice Name"
            type="text"
            fullWidth
            variant="standard"
            {...register('name', { required: true })}
          />
          {errors.name && <p>Exercice name is required.</p>}

          <TextField
            autoFocus
            margin="dense"
            id="record"
            label="Record Value"
            type="text"
            fullWidth
            variant="standard"
            {...register('record', { required: true })}
          />
          {errors.record && <p>The record value is required.</p>}
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            label="Comment"
            type="text"
            fullWidth
            variant="standard"
            {...register('comment')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleClose}>
            Subscribe
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

AddExerciceForm.propTypes = {
  open: Proptypes.bool,
  handleClose: Proptypes.func,
  onClose: Proptypes.func
};

AddExerciceForm.defaultProps = {
  open: null,
  handleClose: null,
  onClose: null
};

export default AddExerciceForm;
