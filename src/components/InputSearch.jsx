import React, { Component } from 'react';
import CartButton from './CartButton';

class InputSearch extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <CartButton />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default InputSearch;
