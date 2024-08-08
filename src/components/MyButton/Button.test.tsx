// @ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the .toBeInTheDocument() matcher
import Button from './Button';

test('renders the button with the correct label', () => {
  render(<Button label="Click me" />);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});
