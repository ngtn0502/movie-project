import React, { Component } from 'react';
import './card.styles.scss';

class Card extends Component {
  render() {
    const { className, children } = this.props;

    return (
      <div
        className={`card ${className ? className : null}`}
      >
        {children}
      </div>
    );
  }
}

export default Card;
