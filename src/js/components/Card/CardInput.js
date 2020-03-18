import React from 'react';
import PropTypes from 'prop-types';

import { TextArea } from './CardStyles';

const CardInput = props => (
  <TextArea placeholder="Enter a description for this card..." autoFocus {...props} />
);

CardInput.defaultProps = {
  onChange() {},
  onKeyPress() {},
  onBlur() {},
  defaultValue: '',
};

CardInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default CardInput;
