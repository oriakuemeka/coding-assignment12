// @ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Image'; // Ensure the path is correct

describe('Img Component', () => {
  test('renders Img with given props', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" visible={true} disabled={false} />);
    const imgElement = screen.getByAltText('Placeholder Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
    expect(imgElement.closest('div')).toHaveStyle('display: inline-block');
    expect(imgElement.closest('div')).toHaveStyle('background-color: transparent');
  });
});
