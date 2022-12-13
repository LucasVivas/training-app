import React, { useState } from 'react';
import './BaseMain.css';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { exerciceAdded } from '../../../store/reducers/ExercicesSlice';
import AddExerciceForm from '../AddExerciceForm';
import ExerciceList from '../ExerciceList';
import AddButton from '../AddButton/AddButton';

// TODO: Check if it is a container component ?
function BaseMain() {
  const [openAddForm, setOpenAddForm] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpenAddForm = () => {
    setOpenAddForm(true);
  };

  const handleClose = () => {
    setOpenAddForm(false);
  };

  const onSubmit = (exercicePayload) => {
    // eslint-disable-next-line
    console.log('onclose', exercicePayload);
    dispatch(exerciceAdded(exercicePayload));
  };

  return (
    <div className="BaseMain" data-testid="BaseMain">
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Exercices
      </Typography>
      <ExerciceList />
      <AddButton onClick={handleClickOpenAddForm} />
      <AddExerciceForm
        open={openAddForm}
        handleClose={handleClose}
        onSubmit={onSubmit}
      />
    </div>
  );
}

BaseMain.propTypes = {};

BaseMain.defaultProps = {};

export default BaseMain;
