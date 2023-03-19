import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <Link to="/mycart" data-testid="shopping-cart-button">
        <span>🛒</span>
      </Link>
    );
  }
}

export default CartButton;
