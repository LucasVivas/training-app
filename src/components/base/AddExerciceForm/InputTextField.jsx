import React from 'react';
import Proptypes from 'prop-types';
import TextField from '@mui/material/TextField';

/* eslint-disable react/jsx-props-no-spreading */
function InputTextField({ id, label, register }) {
  return (
    <TextField
      autoFocus
      margin="dense"
      id={id}
      label={label}
      type="text"
      fullWidth
      variant="standard"
      {...register}
    />
  );
}

InputTextField.propTypes = {
  id: Proptypes.string,
  label: Proptypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  register: Proptypes.object
};

InputTextField.defaultProps = {
  id: '',
  label: '',
  register: null
};

export default InputTextField;
