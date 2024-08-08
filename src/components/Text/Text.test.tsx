// @ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  test('renders the content correctly', () => {
    render(<Text content="Hello, world!" />);
    const textElement = screen.getByText(/Hello, world!/i);
    expect(textElement).toBeInTheDocument();
  });
});
