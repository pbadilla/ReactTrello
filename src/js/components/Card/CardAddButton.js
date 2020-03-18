import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ListFooter } from '../List/ListStyles';
import { ButtonSuccess, ButtonSimple, ButtonsWrapper } from '../Common/Buttons';

const CardAddButton = ({
  isAdding,
  count,
  handleAdd,
  handleSave,
  handleCancel,
}) => {
  if (isAdding) {
    return (
      <ButtonsWrapper>
        <ButtonSuccess id="add-card-btn" onClick={handleSave}>Add Card</ButtonSuccess>
        <ButtonSimple aria-label="close" onClick={handleCancel}>
          <FontAwesomeIcon icon="times" />
        </ButtonSimple>
      </ButtonsWrapper>
    );
  }
  return (
    <ListFooter
      role="button"
      tabIndex={0}
      onKeyPress={handleAdd}
      onClick={handleAdd}
    >
      <FontAwesomeIcon icon="plus" className="small" />
      {count ? ' Add another card' : ' Add a card'}
    </ListFooter>
  );
};

CardAddButton.propTypes = {
  isAdding: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default CardAddButton;
