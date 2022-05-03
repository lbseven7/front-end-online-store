import React, { Component } from 'react';
import * as api from '../services/api';
import Message from '../components/Message';
// import InputSearch from '../components/InputSearch';
import Category from '../components/Category';
// import CartButton from '../components/CartButton';
import ItemCard from '../components/ItemCard';

class Home extends Component {
  constructor() {
    super();

    this.state = { // tirei o categoryId
      products: [],
      message: true,
      search: '', // acrescentei aqui o search
    };
  }

  handleChange = ({ target: { value } }) => { // mudança aqui trouxe do inputSearch
    this.setState({
      search: value,
    });
  }

    fetchList = async () => {
      const { search } = this.state;
      const list = await api.getProductsFromCategoryAndQuery(null, search); // tirei o categoryId
      const result = list.results;
      this.setState({
        products: result,
        message: false,
      });
    }

    render() {
      const { products, message, search } = this.state;
      if (!products) return <p>Nenhum produto foi encontrado</p>;
      return (
        <main>
          <header>
            {/* <InputSearch fetch={ this.fetchlist } />
            <CartButton /> */}
            <input
              type="text"
              data-testid="query-input"
              value={ search }
              onChange={ this.handleChange }
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.fetchList } // tirou o fetch daqui ... bugando
            >
              Search
            </button>
          </header>
          <aside>
            <Category />
          </aside>
          <section>
            { message
              ? <Message />
              : (products.map((product) => ( // mudanças aqui (div com key)
                <div key={ product.id }>
                  <ItemCard card={ product } />
                </div>
              )))}
          </section>

        </main>
      );
    }
}

export default Home;
