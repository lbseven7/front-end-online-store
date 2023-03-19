import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const productsAddedToCart = JSON.parse(localStorage.getItem('cart'));

class CartButton extends Component {
  render() {
    console.log(productsAddedToCart);
    return (
      <div className="mycart">
        <Link to="/mycart" data-testid="shopping-cart-button">
          <span>🛒</span>
        </Link>
      </div>
    );
  }
}

export default CartButton;
