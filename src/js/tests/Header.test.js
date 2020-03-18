/* eslint-disable no-undef */
import React from 'react';
import { createStore} from 'redux';
import { Router, Provider } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { cleanup, fireEvent, render } from '@testing-library/react';

import Header from '../components/Header/Header';
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



{/* <HeaderBase id="header" data-testId='header'>
<Content>
  <Columns>
    <HomeIcon href="#/home" onClick={() => updatedUI()}>
      <HeaderIcon icon="home" />
    </HomeIcon>
  </Columns>
  <Title>
    <a href="#/home" onClick={() => updatedUI()}>
      Trello-Ubeequo 
      <HeaderIcon icon="feather-alt" />
    </a>
  </Title>
</Content>
</HeaderBase> */}