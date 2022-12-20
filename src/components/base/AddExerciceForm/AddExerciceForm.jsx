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
function AddExerciceForm({ open, handleClose, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Record Exercice</DialogTitle>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          handleClose();
        })}
      >
        <DialogContent>
          <DialogContentText>Please enter your new record 🏅</DialogContentText>

          <InputTextField
            id="name"
            label="Name"
            error={errors.name && true}
            register={register('name', { required: true })}
          />

          <InputTextField
            id="record"
            label="Record"
            error={errors.record && true}
            register={register('record', { required: true })}
          />

          <InputTextField
            id="comment"
            label="Comment"
            error={errors.comment && true}
            register={register('comment')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

AddExerciceForm.propTypes = {
  open: Proptypes.bool,
  handleClose: Proptypes.func,
  onSubmit: Proptypes.func
};

AddExerciceForm.defaultProps = {
  open: null,
  handleClose: null,
  onSubmit: null
};

export default AddExerciceForm;
