import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Title, BoardDisplayContainer, TitleSection, Container,
} from './BoardStyles';


const BoardsSection = ({ children, title, icon }) => {
  if (children.length) {
    return (
      <BoardDisplayContainer>
        <TitleSection>
          <FontAwesomeIcon icon={icon} />
          <Title>{title}</Title>
        </TitleSection>
        <Container>
          {children}
        </Container>
      </BoardDisplayContainer>
    );
  }
  return null;
};

BoardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BoardsSection;
