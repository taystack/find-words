import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders word soup home page', () => {
  render(<App />);
  const titleElement = screen.getByText(/word soup/i);
  expect(titleElement).toBeInTheDocument();
});
