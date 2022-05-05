// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import * as api from '../services/api';
// import ItemCard from './ItemCard';
// // import ItemCardDetails from '../pages/ItemCardDetails';

// class Category extends Component {
//   constructor() {
//     super();

//     this.state = {
//       categories: [],
//       products: [],
//       // teste: [],
//     };
//   }

//   // componentDidMount() {
//   //   this.handleProduct();
//   // }

//   // Requisito 06
//   // handleProduct = async (product) => {
//   //   const responseProduct = await api.getProductId(product);
//   //   this.setState({
//   //     // teste: responseProduct,
//   //   });
//   // }

//   render() {
//     // const { categories, products } = this.state;
//     const { categories, products, fetchlist } = this.props; // Mudanças aqui

//     return (
//       // <div>
//       //   { categories.map((category) => ( // fazendo mudanças aqui ... acrescentei botão
//       //     <div
//       //       key={ category.id }
//       //       data-testid="category"
//       //     >
//       //       <button
//       //         type="button"
//       //         id={ category.id }
//       //         onClick={ fetchlist }
//       //       >
//       //         {category.name}
//       //       </button>
//       //     </div>))}
//       //   <section>
//       //     {
//       //       // Requisito 06
//       //       products.map((produto) => (
//       //         <div
//       //           data-testid="product"
//       //           key={ produto.id }
//       //           produto={ produto.id }
//       //         >
//       //           <Link data-testid="product-detail-link" to={ `/item/${produto.id}` }>
//       //             <ItemCard card={ produto } />
//       //           </Link>
//       //         </div>
//       //       ))
//       //     }
//       //   </section>
//       // </div>
//     );
//   }
// }

// export default Category;
