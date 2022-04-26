import React from 'react';

class ListaDeprodutos extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <ul>
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        </ul>
      </div>
    );
  }
}

export default ListaDeprodutos;
