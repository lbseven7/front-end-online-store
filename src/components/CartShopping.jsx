import React, { Component } from 'react';

class CartShopping extends Component {
  constructor() {
    super();

    this.state = {
      getLocalProduct: [],
    };
  }

  componentDidMount() {
    this.getLocal();
  }

  getLocal = () => {
    const getSavedItem = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      getLocalProduct: getSavedItem,
    });
  }

  render() {
    const { getLocalProduct } = this.state;
    return (
      <div>
        {getLocalProduct.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          <div>
            {getLocalProduct.map((product, index) => (
              <div
                key={ index }
              >
                <span data-testid="shopping-cart-product-quantity">
                  1

                </span>
                <span data-testid="shopping-cart-product-name">
                  {product.title}

                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CartShopping;
