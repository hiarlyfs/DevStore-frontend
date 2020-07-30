import { IProductCart } from './cart.interfaces';
import { Product } from '../../types/Products';

// TODO: Função para adicionar 1 na quantidade dos produtos
/* TODO: Função para diminuir 1 na quantidade dos produtos 
  (Deletar caso so tenha um produto e eu queria diminuir
    uma unidade)
*/
function findProduct(
  products: IProductCart[],
  newProduct: Product,
): IProductCart | undefined {
  return products.find((prod) => prod.id === newProduct.id);
}

function productsUpdate(
  products: IProductCart[],
  newProduct: Product,
): IProductCart[] {
  return products.map((prod) =>
    prod.id === newProduct.id
      ? { ...newProduct, quantity: prod.quantity + 1 }
      : prod,
  );
}

export function addNewProduct(
  products: IProductCart[],
  newProduct: Product,
): IProductCart[] {
  const productsExists = findProduct(products, newProduct);
  if (productsExists) return productsUpdate(products, newProduct);
  return [...products, { ...newProduct, quantity: 1 }];
}

export function deleteProduct(
  products: IProductCart[],
  oldProduct: Product,
): IProductCart[] {
  return products.filter((prod) => prod.id !== oldProduct.id);
}
