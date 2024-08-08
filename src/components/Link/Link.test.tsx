// @ts-ignore
import React from 'react';
import { render } from '@testing-library/react';
import Link from './Link';

describe('Link component', () => {
  test('renders the Link component with custom className', () => {
    const className = 'custom-class';
    const href = 'https://example.com';
    const { container } = render(<Link className={className} href={href}>Test Link</Link>);
    const linkElement = container.querySelector('a');

    // Check if the link element contains the custom class name
    expect(linkElement).toHaveClass(className);
  });
});
