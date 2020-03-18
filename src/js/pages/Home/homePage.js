/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import BoardDisplay from '../../components/Board/BoardDisplay';
import BoardsSection from '../../components/Board/BoardsSection';
import BoardsNew from '../../components/Board/BoardsNew';

import { CreateModal } from '../../components/Board/BoardCreate';

import { AppBase, Content } from './homePageStyles';


const HomePage = ({ boards, recent = [] }) => (
  <AppBase id="app">
    <Header />
    <Content id="content">

      <BoardsSection title="Recently Viewed" icon={['far', 'clock']} key="recent">
        {recent.map(boardId => <BoardDisplay key={boardId} boardId={boardId} />)}
      </BoardsSection>

      <BoardsSection title="Personal Boards" icon={['far', 'user']} key="personal">
        {boards.map(boardId => <BoardDisplay key={boardId} boardId={boardId} />)}
      </BoardsSection>

      <BoardsNew />

      <CreateModal />
    </Content>
  </AppBase>
);


HomePage.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string).isRequired,
  recent: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state) => {
  const boards = Object.keys(state.boards);
  const starred = boards.filter(id => state.boards[id].starred);
  const recent = boards.filter(id => !starred.includes(id) && state.boards[id].accessed)
    .sort((a, b) => state.boards[b].accessed - state.boards[a].accessed)
    .slice(0, 4);
  return ({ boards, recent, starred });
};

export default connect(mapStateToProps)(HomePage);
