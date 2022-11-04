import React, { useState, useEffect } from 'react';
import Exercice from '../Exercice/Exercice';

function ExerciceList() {
  const [Exercices, setExercices] = useState([
    { name: 'Push-ups', record: '10 rep', comment: '&nbsp;' },
    { name: 'Front Lever', record: '10 sec', comment: '&nbsp;' },
    { name: 'Plank', record: '60 sec', comment: 'This is a comment' }
  ]);

  useEffect(() => {
    fetch('http://localhost:3030/exercices')
      .then((res) => res.json())
      .then((exercices) => setExercices(exercices));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Record</th>
          <th>Commentaire</th>
        </tr>
      </thead>
      <tbody>
        {Exercices.map((exercice) => (
          <Exercice
            key={exercice.name}
            name={exercice.name}
            record={exercice.record}
            comment={exercice.comment}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ExerciceList;
