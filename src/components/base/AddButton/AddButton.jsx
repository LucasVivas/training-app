import React from 'react';
import './AddButton.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function AddButton() {
  return (
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  );
}

AddButton.propTypes = {};

AddButton.defaultProps = {};

export default AddButton;
