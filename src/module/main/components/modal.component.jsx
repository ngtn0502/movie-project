import React, { Component } from 'react';
import './modal.styles.scss';
import Card from './card.component.jsx';
import { connect } from 'react-redux';

class Modal extends Component {
  render() {
    const closeModal = () => {
      this.props.dispatch({ type: 'OPEN__MODAL' });
    };
    return (
      <>
        <div className='backdrop' onClick={closeModal}></div>
        <Card className='modal__singIn'>
          <h1>Modal</h1>
          <button type='button' onClick={closeModal}>
            Exit
          </button>
        </Card>
      </>
    );
  }
}

export default connect()(Modal);
