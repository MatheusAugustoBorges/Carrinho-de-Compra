const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const API_URL_PRODUCT = 'https://api.mercadolibre.com/items/';

export const fetchProduct = async (idProduct) => {
  if (!idProduct) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`${API_URL_PRODUCT}${idProduct}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (product) => {
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`${API_URL}${product}`);
  const data = await response.json();
  return data.results;
};
