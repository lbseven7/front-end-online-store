import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  // addLocalStorage = (product) => {
  //   const getItem = JSON.parse(localStorage.getItem('cart'));
  //   if (!getItem) {
  //     const cartJson = JSON.stringify([product]); // transforma
  //     localStorage.setItem('cart', cartJson); // salva no lacal
  //   } else {
  //     getItem.push(product); // adiciona ao anterior
  //     const cartJson = JSON.stringify(getItem);
  //     localStorage.setItem('cart', cartJson);
  //   }
  // }

  // ajuda de Dilenio

  addLocalStorage = (product) => {
    let array = [];
    const getItem = JSON.parse(localStorage.getItem('cart'));
    if (getItem) {
      array = getItem;
      array.push(product);
    } else {
      array.push(product);
    }
    const cartJson = JSON.stringify(array);
    localStorage.setItem('cart', cartJson);
  }

  render() {
    const { card } = this.props;
    const { card: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="title " />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addLocalStorage(card) }
        >
          Add To Cart
        </button>
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
