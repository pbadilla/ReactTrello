import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { createBoardAction } from '../../redux/actions';
import { getNewId } from '../../utils';

import {
  BoardButtons,
  BoardCreateWrapper,
  TitleSection,
  Title,
} from './BoardStyles';

import { ButtonSuccess, ButtonDelete } from '../Common/Buttons';


const CreateButton = () => (
  <TitleSection>
    <FontAwesomeIcon icon="baby" />
    <Title>Create New Board</Title>
  </TitleSection>
);

class CreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickCreate(e) {
    if (!e.key || e.key === 'Enter') {
      const { name } = this.state;
      if (name) {
        const { createBoard } = this.props;
        const boardId = getNewId();
        createBoard({
          boardId, name,
        });
        this.setState({
          name: '',
        });
        document.getElementById('modal-close').click();
      }
    }
  };

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <BoardCreateWrapper>
          <div>
            <input
              id="new-board-title-input"
              type="text"
              className="form-control board-title-input"
              placeholder="Enter board title"
              onKeyPress={this.handleClickCreate}
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <BoardButtons>
            <ButtonSuccess onClick={this.handleClickCreate}>Create Board</ButtonSuccess>
            <ButtonDelete id="modal-close" data-dismiss="modal" onClick={this.handleClose}>Cancel</ButtonDelete>
          </BoardButtons>
        </BoardCreateWrapper>
      </div>
    );
  }
}

CreateModal.propTypes = {
  createBoard: PropTypes.func.isRequired,
};

const mapDispathToProps = dispatch => (
  { createBoard: payload => dispatch(createBoardAction(payload)) }
);

const ConnectedModal = connect(null, mapDispathToProps)(CreateModal);

export { CreateButton, ConnectedModal as CreateModal };
