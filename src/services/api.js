export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categorias = await fetch(`https://api.mercadolibre.com/sites/MLB/search?${query ? `&q=${query}` : `category=${categoryId}`}`);
  const data = await categorias.json();
  return data;
}

export async function getProductsFromCategory(categoryId) {
  const getProductsCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const data = await getProductsCategory.json();
  return data;
}

export async function getQuery(query) {
  const querySearch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await querySearch.json();
  return data;
}

// Requisito 06
export async function getProductId(product) {
  const productId = await fetch(` https://api.mercadolibre.com/items/${product}`);
  const data = await productId.json();
  return data;
}
