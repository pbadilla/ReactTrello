/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './ListStyles';

const ListInput = ({ onChange = {}, onKeyPress, onBlur }) => (
  <Input
    id="list-input"
    placeholder="Enter list title..."
    autoFocus
    onChange={onChange}
    onKeyPress={onKeyPress}
    onBlur={onBlur}
  />
);

ListInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
};

export default ListInput;
