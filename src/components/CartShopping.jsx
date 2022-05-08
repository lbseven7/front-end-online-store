import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  increase = (index) => {
    const { getLocalProduct } = this.state;
    getLocalProduct[index].quantity += 1;
    this.setState({
      getLocalProduct,
    });
  }

  decrease = (index) => {
    const { getLocalProduct } = this.state;
    if (getLocalProduct[index].quantity >= 1) {
      getLocalProduct[index].quantity -= 1;
    }
    this.setState({
      getLocalProduct,
    });
  }

  render() {
    const { getLocalProduct } = this.state;
    return (
      <div>
        {(!getLocalProduct || getLocalProduct.length === 0) ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          <div>
            {getLocalProduct.map((product, index) => (
              <div
                key={ index }
              >
                <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.increase(index) }
                >
                  +
                </button>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.decrease(index) }
                >
                  -
                </button>
                <span data-testid="shopping-cart-product-name">
                  {product.title}
                </span>
              </div>
            ))}
          </div>
        )}
        <Link to="/">Back to Home</Link>

      </div>
    );
  }
}

export default CartShopping;
