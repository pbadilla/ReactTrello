import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDrag } from 'react-dnd';

import {
  ButtonEditCard,
  CardDisplay,
  CardDescription,
  CardOptions,
  CardRow,
} from './CardStyles';

const Card = ({
  listId,
  cardId,
  description,
  onClick,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'CARD',
      id: cardId,
      originId: listId,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <CardDisplay ref={drag} isDragging={isDragging}>
      <CardRow>
        <CardDescription>
          {description}
        </CardDescription>
        <CardOptions>
          <ButtonEditCard onClick={() => onClick(cardId, description)}>
            <FontAwesomeIcon icon="pen" className="text-muted" />
          </ButtonEditCard>
        </CardOptions>
      </CardRow>
    </CardDisplay>
  );
};

Card.propTypes = {
  listId: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const card = state.cards[ownProps.cardId];
  const description = card ? card.description : '';
  return ({ description });
};

export default connect(mapStateToProps)(Card);
