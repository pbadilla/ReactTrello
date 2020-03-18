import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CardDisplay } from './CardStyles';

const CardDropPreview = ({ description }) => (
  <CardDisplay>
    <div className="row mx-0">
      <div className="col-11 px-0">
        {description}
      </div>
    </div>
  </CardDisplay>
);

CardDropPreview.propTypes = {
  description: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  description: state.cards[ownProps.cardId].description,
});

export default connect(mapStateToProps)(CardDropPreview);
