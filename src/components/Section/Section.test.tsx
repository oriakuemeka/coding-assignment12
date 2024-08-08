// @ts-ignore
import React from 'react';
import { render } from '@testing-library/react';
import Section from './Section';

describe('Section component', () => {
  test('renders the Section component as disabled', () => {
    const { container } = render(<Section disabled>Test Content</Section>);
    const sectionElement = container.firstChild;

    // Check if the section element has the correct style when disabled
    expect(sectionElement).toHaveStyle('opacity: 0.5');
    expect(sectionElement).toHaveStyle('cursor: not-allowed');
  });
});
