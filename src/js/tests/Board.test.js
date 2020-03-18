/* eslint-disable no-undef */
import React from 'react';
import { createStore} from 'redux';
import { Router, Provider } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { cleanup, fireEvent, render } from '@testing-library/react';

import BoardPage from '../pages/Board/boardPage';
import boardsReducer from '../redux/reducers/boardsReducer';

afterEach(cleanup);

const initialState = {
  exists: false,
}

const props = {
  match: { id: 1 },
  exists: false,
};

const store = createStore(boardsReducer, initialState);
const history = createMemoryHistory();

const RoutedComponent = (
  <Provider store={store}>
    <Router history={history}>
      <BoardPage {...props} />
    </Router>
  </Provider>
);

test('Should LOAD AppBase', () => {
  // const { queryByText, getAllByTestId } = render(RoutedComponent);
});

