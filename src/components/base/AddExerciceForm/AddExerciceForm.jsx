import React from 'react';
const AddExerciceForm = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Record:
        <input type="text" name="record" />
      </label>

      <label>
        Commentaire:
        <input type="text" name="commentaire" />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddExerciceForm;
