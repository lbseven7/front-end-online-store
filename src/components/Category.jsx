import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchList();
  }

fetchList = async () => {
  const categoriesList = await api.getCategories();
  this.setState({
    categories: categoriesList,
  });
}

render() {
  const { categories } = this.state;

  return (
    <ul>
      { categories.map((category) => (
        <li
          data-testid="category"
          key={ category.id }
        >
          {category.name}

        </li>))}
    </ul>
  );
}
}

export default Category;
