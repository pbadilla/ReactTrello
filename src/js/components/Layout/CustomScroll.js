import React from 'react';
import PropTypes from 'prop-types';

import { ScrollXBase, ScrollYBase } from './CustomScrollStyles';

const ScrollX = ({ children }) => (
  <ScrollXBase>
    {children}
  </ScrollXBase>
);


ScrollX.defaultProps = {
  children: null,
};

ScrollX.propTypes = {
  children: PropTypes.node,
};


const ScrollY = ({ children }) => (
  <ScrollYBase>
    {children}
  </ScrollYBase>
);


ScrollY.defaultProps = {
  children: null,
};

ScrollY.propTypes = {
  children: PropTypes.node,
};

export { ScrollX, ScrollY };
