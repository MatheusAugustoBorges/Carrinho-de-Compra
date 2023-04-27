import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID } from './helpers/cartFunctions';

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

const createListProduct = async (item) => {
  try {
    insertTextLoading();
    const productResults = await fetchProductsList(item);
    if (!productResults) {
      throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
    } else {
      removeTextLoading();
    }
    productResults.forEach((product) => {
      const add = createProductElement(product);
      productElement.appendChild(add);
    });
    const buttons = document.querySelectorAll('.product__add');
    buttons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        const idProduct = event.target.parentNode.firstChild.innerHTML;
        saveCartID(idProduct);
        const dataProduct = await fetchProduct(idProduct);
        const li = createCartProductElement(dataProduct);
        const cartList = document.querySelector('.cart__products');
        cartList.appendChild(li);
      });
    });
  } catch (error) {
    load.innerHTML = error.message;
    load.className = 'error';
    productElement.appendChild(load);
  }
};

createListProduct('celular');
