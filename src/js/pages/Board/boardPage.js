/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Board from '../../components/Board/Board';
import DragLayer from '../../components/Layout/DragLayer';

import { AppBase, Content, Danger } from './boardPageStyles';

const BoardPage = ({ match, exists }) => {
  const { id } = match.params;
  return (
    <AppBase id="app" data-testid="app">
      <Header />
      <Content id="content" data-testid="content">
        { exists
          ? <Board boardId={id} />
          : (
            <Danger data-testid="danger">
              <h2>Error</h2>
              <h3>The requested board does not exist...</h3>
            </Danger>
          )
        }
      </Content>
      <Footer />
      <DragLayer />
    </AppBase>
  );
};

BoardPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  exists: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  exists: !!state.boards[ownProps.match.params.id],
});


export default connect(mapStateToProps)(BoardPage);
