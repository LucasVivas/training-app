import React from 'react';
import './BaseMain.css';
import Typography from '@mui/material/Typography';
import AddExerciceForm from '../AddExerciceForm';
import ExerciceList from '../ExerciceList';

function BaseMain() {
  return (
    <div className="BaseMain" data-testid="BaseMain">
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Exercices
      </Typography>
      <ExerciceList />
      <AddExerciceForm />
    </div>
  );
}

BaseMain.propTypes = {};

BaseMain.defaultProps = {};

export default BaseMain;
