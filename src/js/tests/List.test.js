/* eslint-disable no-undef */
import React from 'react';
import { createStore} from 'redux';
import { Router, Provider } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { cleanup, fireEvent, render } from '@testing-library/react';

import List from '../components/List/List';
import boardsReducer from '../redux/reducers/boardsReducer';

afterEach(cleanup);

const initialState = {
  exists: false,
}

const props = {
  listId: '1',
  cards: [],
  name: 'Test',
  onDeleteList: jest.fn(),
  createCard: jest.fn(),
  modifyCard: jest.fn(),
  deleteCard: jest.fn(),
  removeCard: jest.fn(),
};

const store = createStore(boardsReducer, initialState);
const history = createMemoryHistory();

const RoutedComponent = (
  <Provider store={store}>
    <Router history={history}>
      <List {...props} />
    </Router>
  </Provider>
);

test('Should LOAD Header', () => {
  // const { queryByText, getAllByTestId } = render(RoutedComponent);
});

