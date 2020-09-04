import api from './index';
import { Product } from '../../types/Products';
import { INewProduct } from '../../redux/newProduct/newProduct.interfaces';

export async function createProduct({
  productName,
  productPrice,
  img,
  productCategory,
}: INewProduct): Promise<Product> {
  try {
    const formData = new FormData();

    formData.append('name', productName);
    formData.append('price', productPrice);
    formData.append('image', img);
    formData.append('category', productCategory);
    const result = await api.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return result.data;
  } catch (err) {
    console.log(err);
    throw new Error('An error occurred while creating a product');
  }
}
