/* eslint-disable no-undef */
import React from 'react';
import { createStore} from 'redux';
import { Router, Provider } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { cleanup, fireEvent, render } from '@testing-library/react';

import Card from '../components/Card/Card';
import boardsReducer from '../redux/reducers/boardsReducer';

afterEach(cleanup);

const initialState = {
  exists: false,
}

const props = {
  listId: "1",
  cardId: "1",
  description: "Description card",
  onClick: jest.fn(),
};

const store = createStore(boardsReducer, initialState);
const history = createMemoryHistory();

const RoutedComponent = (
  <Provider store={store}>
    <Router history={history}>
      <Card {...props} />
    </Router>
  </Provider>
);

test('Should LOAD Card', () => {
  // const { queryByText, getAllByTestId } = render(RoutedComponent);
});

