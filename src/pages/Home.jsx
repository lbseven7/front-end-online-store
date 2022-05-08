import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Message from '../components/Message';
import CartButton from '../components/CartButton';
import ItemCard from '../components/ItemCard';

class Home extends Component {
  constructor() {
    super();

    this.state = { // tirei o categoryId
      products: [],
      // message: true,
      search: '', // acrescentei aqui o search
      categories: [],
    };
  }

  async componentDidMount() {
    const category = await api.getCategories();
    this.setState({
      categories: category,
    });
  }

  handleChange = ({ target: { value } }) => { // mudança aqui trouxe do inputSearch
    this.setState({
      search: value,
    });
  }

  handleClick = async ({ target }) => {
    const { id } = target;
    const idProduct = await api.getProductsFromCategory(id); // categorias clicadas
    console.log(idProduct.results);
    this.setState({
      products: idProduct.results, // 50 produtos (id da categoria)
      // message: false,
    });
  }

    fetchList = async () => {
      const { search } = this.state;
      const list = await api.getQuery(search); // tirei o categoryId
      const result = list.results;
      this.setState({
        products: result,
        // message: false,
      });
    }

    render() {
      const { products, search, categories } = this.state;
      if (!products) return <p>Nenhum produto foi encontrado</p>;
      return (
        <main>
          <header>
            <CartButton />
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
          <section>
            <Message />
          </section>
          <div>
            { categories.map((category) => ( // fazendo mudanças aqui ... acrescentei botão
              <div
                key={ category.id }
              >
                <button
                  data-testid="category"
                  type="button"
                  id={ category.id }
                  onClick={ this.handleClick }
                >
                  {category.name}
                </button>
              </div>))}
            <section>
              {
                // Requisito 06
                // message
                //   ? <Message />
                products.map((produto) => (
                  <div key={ produto.id }>
                    <Link
                      key={ produto.id }
                      produto={ produto.id }
                      data-testid="product-detail-link"
                      to={ `/item/${produto.id}` }
                    >
                      <ItemCard card={ produto } />
                    </Link>
                  </div>
                ))
              }
            </section>
          </div>
        </main>
      );
    }
}

export default Home;
