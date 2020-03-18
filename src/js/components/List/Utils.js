


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


