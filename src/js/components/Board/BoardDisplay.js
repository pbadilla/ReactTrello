/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { modifyBoardAction, updateUiAction } from '../../redux/actions';

import {
  BoardDisplayBase,
  BoardDisplayLink,
  BoardDisplayTitle,
  BoardContainer,
} from './BoardStyles';

const BoardDisplay = ({
  boardId,
  name,
}) => (
  <BoardDisplayBase>
    <BoardDisplayLink
      role="button"
      href={`#/board/${boardId}`}
    >
      <BoardContainer>
        <BoardDisplayTitle>{name}</BoardDisplayTitle>
      </BoardContainer>
    </BoardDisplayLink>
  </BoardDisplayBase>
);


BoardDisplay.propTypes = {
  boardId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  name: state.boards[ownProps.boardId].name,
});

const mapDispatchToProps = dispatch => ({
  updateUI: payload => dispatch(updateUiAction(payload)),
  modifyBoard: payload => dispatch(modifyBoardAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDisplay);
