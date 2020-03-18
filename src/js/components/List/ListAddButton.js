import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListInput from './ListInput';

import { ButtonBase, ButtonSuccess, ButtonsWrapper } from '../Common/Buttons';

const ListAddButton = ({
  isAdding,
  count,
  handleAdd,
  handleChange,
  handleSave,
  handleCancel,
}) => {
  if (isAdding) {
    return (
      <div>
        <ListInput
          onChange={handleChange}
          onKeyPress={handleSave}
          onBlur={handleCancel}
        />
        <ButtonsWrapper>
          <ButtonSuccess id="add-list-btn" onClick={handleSave}>Add List</ButtonSuccess>
          <ButtonBase onClick={handleCancel}>
            <FontAwesomeIcon icon="times" />
          </ButtonBase>
        </ButtonsWrapper>
      </div>
    );
  }
  return (
    <ButtonBase onClick={handleAdd}>
      {count ? '+ Add another list' : '+ Add a list'}
    </ButtonBase>
  );
};

ListAddButton.propTypes = {
  isAdding: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  { color: state.ui.color }
);

export default connect(mapStateToProps)(ListAddButton);
