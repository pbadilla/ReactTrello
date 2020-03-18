/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';

import CardDropPreview from './CardDropPreview';
import { removeCardAction, addCardAction, moveCardAction } from '../../redux/actions';

import { CardContainerBase } from './CardStyles';

const CardContainer = ({
  index,
  removeCard,
  addCard,
  moveCard,
  listId,
  children = null,
}) => {
  const [{ isOver, draggedItem }, drop] = useDrop({
    accept: 'CARD',
    drop(droppedItem) {
      if (droppedItem.originId !== listId) {
        addCard({ index, listId, cardId: droppedItem.id });
        removeCard({ index, listId: droppedItem.originId, cardId: droppedItem.id });
      }
      moveCard({ index, listId, cardId: droppedItem.id });
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      draggedItem: monitor.getItem(),
    }),
  });
  return (
    <CardContainerBase ref={drop}>
      {isOver && <CardDropPreview cardId={draggedItem.id} />}
      {children}
    </CardContainerBase>
  );
};


CardContainer.propTypes = {
  index: PropTypes.number.isRequired,
  listId: PropTypes.string.isRequired,
  removeCard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const mapDispatchToProps = dispatch => ({
  removeCard: payload => dispatch(removeCardAction(payload)),
  addCard: payload => dispatch(addCardAction(payload)),
  moveCard: payload => dispatch(moveCardAction(payload)),
});

export default connect(null, mapDispatchToProps)(CardContainer);
