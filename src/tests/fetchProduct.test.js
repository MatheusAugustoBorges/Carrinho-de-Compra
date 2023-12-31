import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });
  it('retorno de fetchProduct é uma estrutura de dados igual ao objeto esperado', async () => {
    const aux = await fetchProduct('MLB1405519561');
    expect(aux).toEqual(product);
  });
  it('retorna erro se chamar a fecthProduct sem argumento', async () => {
    const promise = fetchProduct();
    await expect(promise).rejects.toThrow('ID não informado');
  });
});
