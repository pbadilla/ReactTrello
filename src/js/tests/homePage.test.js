/* eslint-disable no-undef */
import React from 'react';
import { createStore} from 'redux';
import { Router, Provider } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { cleanup, fireEvent, render } from '@testing-library/react';

import HomePage from '../pages/Home/HomePage';
import boardsReducer from '../redux/reducers/boardsReducer';

afterEach(cleanup);

const initialState = {
  exists: false,
}

const props = {
  boards: [],
  recent: [],
};

const store = createStore(boardsReducer, initialState);
const history = createMemoryHistory();

const RoutedComponent = (
  <Provider store={store}>
    <Router history={history}>
      <HomePage {...props} />
    </Router>
  </Provider>
);

test('Should LOAD Header', () => {
  // const { queryByText, getAllByTestId } = render(RoutedComponent);
});

