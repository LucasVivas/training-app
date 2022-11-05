import React from 'react';
import './BaseMain.css';
import Typography from '@mui/material/Typography';
import AddExerciceForm from '../AddExerciceForm';
import ExerciceList from '../ExerciceList';
import AddButton from '../AddButton/AddButton';

// TODO: Check if it is a container component ?
function BaseMain() {
  return (
    <div className="BaseMain" data-testid="BaseMain">
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Exercices
      </Typography>
      <ExerciceList />
      <AddButton />
      <AddExerciceForm />
    </div>
  );
}

BaseMain.propTypes = {};

BaseMain.defaultProps = {};

export default BaseMain;
