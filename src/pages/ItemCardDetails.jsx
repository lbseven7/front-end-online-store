import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ItemCardDetails extends Component {
  constructor() {
    super();

    this.state = {
      productDetails: [],
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const productDetails = await api.getProductId(id);

    this.setState({
      productDetails,
    });
  }
  // atualiza localStorage

  addToCart = (product) => {
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
    const { productDetails: { title, thumbnail, price } } = this.state;
    const { productDetails } = this.state;
    return (
      <div>
        <div>
          <h2 data-testid="product-detail-name">{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </div>
        <div>
          <Link
            to="/"
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => this.addToCart(productDetails) }
          >
            Add To Cart
          </Link>

        </div>
      </div>
    );
  }
}

ItemCardDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

// ItemCardDetails.defaultProps = {
//   match: PropTypes.shape({ params: PropTypes.shape({}) }),
// };

// id: PropTypes.string.isRequired,
//  match: PropTypes.string.isRequired,

export default ItemCardDetails;
