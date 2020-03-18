import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  createCardAction,
  modifyCardAction,
  deleteCardAction,
  removeCardAction,
} from '../../redux/actions';

import Card from '../Card/Card';
import CardContainer from '../Card/CardContainer';
import CardInput from '../Card/CardInput';
import CardAddButton from '../Card/CardAddButton';
import CardEditSection from '../Card/CardEditSection';
import { getNewId } from '../../utils';

import { ListBase, ButtonDeleteList } from './ListStyles';
import { CardTitle, CardBody } from '../Card/CardStyles';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: null,
      isAdding: false,
      cardText: null,
    };
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleCancelCard = this.handleCancelCard.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleChangeCard = this.handleChangeCard.bind(this);
    this.handleStartEdit = this.handleStartEdit.bind(this);
    this.handleSaveCardEdit = this.handleSaveCardEdit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isAdding, editId } = this.state;
    // trying to avoid re-renders due to newCard changes when typing on input
    return nextProps !== this.props
    || nextState.isAdding !== isAdding
    || nextState.editId !== editId;
  }

  handleAddCard(e) {
    if (!e.key || e.key === 'Enter') {
      this.setState({ isAdding: true });
    }
  }

  handleSaveCard(e) {
    if (!e.key || e.key === 'Enter') {
      const { cardText } = this.state;
      if (cardText) {
        document.getElementById('card-input').value = null;
        const { createCard, listId } = this.props;
        const cardId = getNewId();
        createCard({ cardId, listId, description: cardText });
        this.setState({ cardText: null });
      }
      // avoid entering a newline with enter press
      e.preventDefault();
    }
  }

  handleCancelCard(e) {
    if (!e.relatedTarget
      || !['add-card-btn', 'delete-card-btn'].includes(e.relatedTarget.id)) {
      this.setState({ isAdding: false, cardText: null, editId: null });
    }
  }

  handleDeleteCard() {
    const { deleteCard, listId } = this.props;
    const { editId: cardId } = this.state;
    deleteCard({ listId, cardId });
    this.setState({ editId: null, cardText: null });
  }

  handleChangeCard(e) {
    this.setState({ cardText: e.target.value });
  }

  handleStartEdit(key, desc) {
    this.setState({ editId: key, cardText: desc });
  }

  handleSaveCardEdit(e) {
    if (!e.key || e.key === 'Enter') {
      const { cardText, editId } = this.state;
      if (cardText) {
        const { modifyCard } = this.props;
        modifyCard({ cardId: editId, newValues: { description: cardText } });
        this.setState({ cardText: null, editId: null });
      }
      e.preventDefault();
    }
  }

  handleBeginDragCard(monitor) {
    const { removeCard, listId } = this.props;
    const cardId = monitor.getItem().id;
    removeCard({ cardId, listId });
  }

  render() {
    const {
      name,
      cards,
      listId,
      onDeleteList,
    } = this.props;
    const { isAdding, editId } = this.state;

    return (
      <ListBase>
        <CardTitle>
          <div>
            <span>{name}</span>
            <ButtonDeleteList onClick={() => onDeleteList(listId, cards)}>
              <FontAwesomeIcon className="text-secondary" icon="trash" />
            </ButtonDeleteList>
          </div>
        </CardTitle>
        <CardBody>
          {cards.map((cardId, index) => {
            if (cardId === editId) {
              return (
                <CardEditSection
                  key={cardId}
                  cardId={cardId}
                  handleCancel={this.handleCancelCard}
                  handleChange={this.handleChangeCard}
                  handleSave={this.handleSaveCardEdit}
                  handleDelete={this.handleDeleteCard}
                />
              );
            }
            return (
              <CardContainer index={index} listId={listId} key={cardId}>
                <Card
                  cardId={cardId}
                  listId={listId}
                  onClick={this.handleStartEdit}
                />
              </CardContainer>
            );
          })}
          <CardContainer index={cards.length} listId={listId} key="extra" extra />
          { isAdding && (
            <CardInput
              id="card-input"
              onChange={this.handleChangeCard}
              onKeyPress={this.handleSaveCard}
              onBlur={this.handleCancelCard}
            />
          )}
        </CardBody>
        <CardAddButton
          isAdding={isAdding}
          count={cards.length}
          handleAdd={this.handleAddCard}
          handleSave={this.handleSaveCard}
          handleCancel={this.handleCancelCard}
        />
      </ListBase>
    );
  }
}


List.propTypes = {
  listId: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  onDeleteList: PropTypes.func.isRequired,
  createCard: PropTypes.func.isRequired,
  modifyCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  name: state.lists[ownProps.listId].name,
  cards: state.lists[ownProps.listId].cards,
});

const mapDispathToProps = dispatch => ({
  createCard: payload => dispatch(createCardAction(payload)),
  modifyCard: payload => dispatch(modifyCardAction(payload)),
  deleteCard: payload => dispatch(deleteCardAction(payload)),
  removeCard: payload => dispatch(removeCardAction(payload)),
});

export default connect(mapStateToProps, mapDispathToProps)(List);
