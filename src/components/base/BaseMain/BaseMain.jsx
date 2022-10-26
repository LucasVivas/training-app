import React from 'react';
import './BaseMain.css';
import Exercice from '../Exercice/Exercice';
import AddExerciceForm from '../AddExerciceForm/AddExerciceForm';

function BaseMain() {
  return (
    <div className="BaseMain" data-testid="BaseMain">
      <h1>Exercices</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Record</th>
            <th>Commentaire</th>
          </tr>
        </thead>
        <tbody>
          <Exercice
            name="Pull-ups"
            record="10 rep"
            comment="&nbsp;"
          />
          <Exercice
            name="Front Lever"
            record="10 sec"
            comment="&nbsp;"
          />
          <Exercice
            name="Plank"
            record="60 sec"
            comment="This is a comment"
          />
        </tbody>
      </table>
      <AddExerciceForm />
    </div>
  );
}

BaseMain.propTypes = {};

BaseMain.defaultProps = {};

export default BaseMain;
