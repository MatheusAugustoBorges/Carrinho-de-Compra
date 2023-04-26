import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const productElement = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const load = document.createElement('p');

const insertTextLoading = () => {
  load.innerHTML = 'carregando...';
  load.className = 'loading';
  productElement.appendChild(load);
};

const removeTextLoading = () => {
  productElement.removeChild(load);
};

const createListProduct = async () => {
  insertTextLoading();
  const productResults = await fetchProductsList('computador');
  removeTextLoading();
  productResults.map((product) => {
    const add = createProductElement(product);
    return productElement.appendChild(add);
  });
};

createListProduct();
