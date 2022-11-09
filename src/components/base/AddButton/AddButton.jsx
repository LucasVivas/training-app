import React from 'react';
import PropTypes from 'prop-types';
import './AddButton.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function AddButton({ onClick }) {
  return (
    <Fab color="primary" aria-label="add" onClick={onClick}>
      <AddIcon />
    </Fab>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func
};

AddButton.defaultProps = {
  onClick: null
};

export default AddButton;
