import React from 'react';
import Proptypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import InputTextField from './InputTextField';

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
        // TODO: test it
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

          <InputTextField
            id="name"
            label="Name"
            register={register('name', { required: true })}
          />
          {errors.name && <p>The name value is required.</p>}

          <InputTextField
            id="record"
            label="Record"
            register={register('record', { required: true })}
          />
          {errors.record && <p>The record value is required.</p>}

          <InputTextField
            id="comment"
            label="Comment"
            register={register('comment')}
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
