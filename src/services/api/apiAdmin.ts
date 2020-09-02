import api from './index';

export async function createProduct(data: {
  productName: string;
  productPrice: number;
  img?: File;
}): Promise<any> {
  try {
    const result = api.post('/products', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(result);
  } catch (err) {
    console.log(err);
    throw new Error('An error occurred while creating a product');
  }
}
