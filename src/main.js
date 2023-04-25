import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const productElement = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productResults = await fetchProductsList('computador');

productResults.map((product) => {
  const add = createProductElement(product);
  return productElement.appendChild(add);
});
