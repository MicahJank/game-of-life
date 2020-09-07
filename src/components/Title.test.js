import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title.js';

test('renders learn react link', () => {
  const { getByText } = render(<Title />);
  const linkElement = getByText(/conway's game of life/i);
  expect(linkElement).toBeInTheDocument();
});
