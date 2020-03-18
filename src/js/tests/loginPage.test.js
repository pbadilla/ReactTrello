/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';

import LoginPage from '../pages/Login/LoginPage';

afterEach(cleanup);

describe('LoginPage Page', () => {

  test('should LOAD CORRECTLY', () => {
    const { getByTestId } = render(<LoginPage />);
    
    expect(getByTestId('login')).toBeInTheDocument();
  });
});

