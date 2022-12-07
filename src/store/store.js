import { configureStore } from '@reduxjs/toolkit';
import ExerciceReducer from './reducers/ExercicesSlice';

export default configureStore({
  reducer: { exercices: ExerciceReducer }
});
