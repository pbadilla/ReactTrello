import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';


import { updateUiAction } from '../../redux/actions';

import { HeaderBase, Content, Columns, HomeIcon, Title, HeaderIcon } from './HeaderStyles';

const Header = ({ updatedUI }) => (
  <HeaderBase id="header" data-testId='header'>
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
  </HeaderBase>
);

Header.propTypes = {
  updatedUI: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  { color: state.ui.color }
);

const mapDispatchToProps = dispatch => (
  { updatedUI: () => dispatch(updateUiAction({ color: 'blue', img: null })) }
);

const HeaderCompose = compose(connect(mapStateToProps, mapDispatchToProps))(Header);
export { Header, HeaderCompose };
  

