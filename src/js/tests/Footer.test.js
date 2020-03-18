/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, within } from '@testing-library/react';

import Footer from '../components/Footer/Footer';

afterEach(cleanup);

describe('Footer Component />', () => {

  test('should LOAD AUTHOR', () => {
    const { getByTestId } = render(<Footer />);
    const { getByText } = within(getByTestId('footer'))

    expect(getByTestId('footer')).toBeInTheDocument();
    expect(getByText('Pachi Badilla')).toBeInTheDocument();
  });
});
