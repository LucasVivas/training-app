import React from 'react';
import './BaseMain.css';
import AddExerciceForm from '../AddExerciceForm/AddExerciceForm';
import ExerciceList from '../ExerciceList/ExerciceList';

function BaseMain() {
  return (
    <div className="BaseMain" data-testid="BaseMain">
      <h1>Exercices</h1>
      <ExerciceList />
      <AddExerciceForm />
    </div>
  );
}

BaseMain.propTypes = {};

BaseMain.defaultProps = {};

export default BaseMain;
