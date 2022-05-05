import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    // const { card } = this.props;
    const { card: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="title " />
        <p>{ price }</p>
      </div>
    );
  }
}

ItemCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ItemCard;
