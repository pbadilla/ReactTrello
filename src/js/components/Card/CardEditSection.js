import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardInput from './CardInput';

import {
  ButtonEditSuccess,
  CardFluid,
  CarFluidContent,
  CarFluidColumn,
} from './CardStyles';
import { ButtonDelete } from '../Common/Buttons';
import { AutoColumn } from '../Common/CommonStyles';

const EditSection = ({
  handleCancel,
  handleChange,
  handleSave,
  handleDelete,
  description,
}) => (
  <CardFluid>
    <CarFluidContent>
      <CarFluidColumn>
        <CardInput
          defaultValue={description}
          onChange={handleChange}
          onKeyPress={handleSave}
          onBlur={handleCancel}
          placeholder="Enter card description..."
        />
      </CarFluidColumn>
    </CarFluidContent>
    <CarFluidContent>
      <AutoColumn>
        <ButtonEditSuccess type="button" id="add-card-btn" onClick={handleSave}>Save</ButtonEditSuccess>
        <ButtonDelete type="button" id="delete-card-btn" onClick={handleDelete}>Delete</ButtonDelete>
      </AutoColumn>
      <AutoColumn>
        <button type="button" className="close" onClick={handleCancel}>
          <FontAwesomeIcon icon="times" />
        </button>
      </AutoColumn>
    </CarFluidContent>
  </CardFluid>
);

EditSection.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  description: state.cards[ownProps.cardId].description,
});

export default connect(mapStateToProps)(EditSection);
