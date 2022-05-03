import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      categoryId: '',
    };
  }

  componentDidMount() {
    this.fetchList();
    this.getCategoryById();
  }

fetchList = async () => {
  const categoriesList = await api.getCategories();
  this.setState({
    categories: categoriesList,
  });
}

// Requisito 06
  getCategoryById = async () => {
    const { categoryId } = this.state;
    const categoryById = await api.getCategoryId(categoryId);
    console.log(categoryById);

    this.setState({
      categoryId: categoryById,
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        { categories.map((category) => ( // fazendo mudanças aqui ... acrescentei botão
          <div
            key={ category.id }
            data-testid="category"
          >
            <button type="button">{category.name}</button>
          </div>))}
      </div>
    );
  }
}

export default Category;
