import React from 'react';

const Exercice = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.record}</td>
      <td>{props.comment}</td>
    </tr>
  );
};

export default Exercice;
