const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (product) => {
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`${API_URL}${product}`);
  const data = await response.json();
  return data.results;
};
