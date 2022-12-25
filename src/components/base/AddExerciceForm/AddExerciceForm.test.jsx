import React from 'react';
import { render, screen } from '@testing-library/react';
import AddExerciceForm from './AddExerciceForm';

describe('<AddExerciceForm />', () => {
  test('it should mount', () => {
    render(<AddExerciceForm />);

    const addExAddExerciceForm = screen.getByTestId('AddExerciceForm');

    expect(addExAddExerciceForm).toBeInTheDocument();
  });
});
