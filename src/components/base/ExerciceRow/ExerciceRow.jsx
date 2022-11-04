import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function ExerciceRow({ name, record, comment }) {
  return (
    <TableRow
      key={name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{record}</TableCell>
      <TableCell align="right">{comment}</TableCell>
    </TableRow>
  );
}

ExerciceRow.propTypes = {
  name: PropTypes.string,
  record: PropTypes.string,
  comment: PropTypes.string
};

ExerciceRow.defaultProps = {
  name: 'MyExercice',
  record: 'MyRecord',
  comment: 'MyComment'
};

export default ExerciceRow;
