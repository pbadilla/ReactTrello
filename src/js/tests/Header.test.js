/* eslint-disable no-undef */
import React from 'react';
import { createStore } from 'redux';
import { Router, Provider } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { cleanup, fireEvent, render } from '@testing-library/react';

import Header from '../components/Header/Header';

afterEach(cleanup);

const initialState = {
  exists: false,
}

const props = {
  match: { id: 1 },
  exists: false,
};

const mockStore = (state = initialState) => configureMockStore()(state);

const history = createMemoryHistory();

const RoutedComponent = (
  <Provider store ={mockStore}>
    <Router history={history}>
      <Header {...props} />
    </Router>
  </Provider>
);

describe('Header Component', () => {

  test('Should LOAD Header with all ther CLICKS', () => {
    const { getByTestId, getByText  } = render(RoutedComponent);

    expect(getByTestId('header')).toBeInTheDocument();
  });
});
