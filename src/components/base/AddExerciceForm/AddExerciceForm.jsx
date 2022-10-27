import React from 'react';

function AddExerciceForm() {
  return (
    <form>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" id="name" />
      </label>

      <label htmlFor="record">
        Record:
        <input type="text" name="record" id="record" />
      </label>

      <label htmlFor="comment">
        Commentaire:
        <input type="text" name="comment" id="comment" />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddExerciceForm;
