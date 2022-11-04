import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExerciceRow from '../ExerciceRow/ExerciceRow';

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Exercice</TableCell>
            <TableCell align="right">Record</TableCell>
            <TableCell align="right">Commentaire</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Exercices.map((exercice) => (
            <ExerciceRow
              key={exercice.name}
              name={exercice.name}
              record={exercice.record}
              comment={exercice.comment}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExerciceList;
