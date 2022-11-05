import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddButton from './AddButton';

describe('<AddButton />', () => {
  test('it should mount', () => {
    render(<AddButton />);

    const addButton = screen.getByTestId('AddButton');

    expect(addButton).toBeInTheDocument();
  });
});
