import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ name: 'redux', record: 'redux', comment: 'redux' }];

// useEffect(() => {
//   fetch('http://localhost:3030/exercices')
//     .then((res) => res.json())
//     .then((exercices) => setExercices(exercices));
// }, []);

export const ExerciceSlice = createSlice({
  name: 'exercices',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { add } = ExerciceSlice.actions;

export default ExerciceSlice.reducer;
