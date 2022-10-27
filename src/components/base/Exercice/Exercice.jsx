import React from 'react';
import PropTypes from 'prop-types';

function Exercice({ name, record, comment }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{record}</td>
      <td>{comment}</td>
    </tr>
  );
}

Exercice.propTypes = {
  name: PropTypes.string,
  record: PropTypes.string,
  comment: PropTypes.string
};

Exercice.defaultProps = {
  name: 'MyExercice',
  record: 'MyRecord',
  comment: 'MyComment'
};

export default Exercice;
