import api from './index';

export async function createProduct({
  productName,
  productPrice,
  img,
  productCategory,
}: {
  productName: string;
  productPrice: string;
  img: Blob | string;
  productCategory: string;
}): Promise<any> {
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
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    throw new Error('An error occurred while creating a product');
  }
}
