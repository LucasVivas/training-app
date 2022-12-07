import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSelector } from 'react-redux';
import ExerciceRow from '../ExerciceRow';

function ExerciceList() {
  const exercices = useSelector((state) => state.exercices);

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
          {exercices.map((exercice) => (
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
