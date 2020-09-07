/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProductCart } from './cart.interfaces';
import { Product } from '../../types/Products';

function findProductById(
  products: IProductCart[],
  idNewProd: number,
): IProductCart | undefined {
  return products.find((prod) => prod.id === idNewProd);
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
  const productsExists = findProductById(products, newProduct.id);
  if (productsExists) return productsUpdate(products, newProduct);
  return [...products, { ...newProduct, quantity: 1 }];
}

export function deleteProduct(
  products: IProductCart[],
  idOldProduct: number,
): IProductCart[] {
  return products.filter((prod) => prod.id !== idOldProduct);
}

export function addUnitProduct(
  products: IProductCart[],
  id: number,
): IProductCart[] {
  return products.map((prod) =>
    prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod,
  );
}

export function removeUnitProduct(
  products: IProductCart[],
  id: number,
): IProductCart[] {
  const prodToUpdate = findProductById(products, id)!;
  if (prodToUpdate.quantity - 1 > 0) {
    return products.map((prod) =>
      prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod,
    );
  }

  return deleteProduct(products, id);
}
