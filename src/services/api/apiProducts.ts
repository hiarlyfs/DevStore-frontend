import api from './index';
import { Product } from '../../types/Products';

interface GetProducts {
  products: Product[];
}

const getAllProductsFrom = async (
  place: 'all' | 'local' | 'online',
): Promise<Product[]> => {
  try {
    const request = await api.get<GetProducts>(`/products?place=${place}`);
    return request.data.products;
  } catch (err) {
    throw new Error('An error occurred');
  }
};

const getAllProductsWithCategory = async (
  place: 'all' | 'local' | 'online',
  category: string,
): Promise<Product[]> => {
  try {
    const request = await api.get<GetProducts>(
      `/products?place=${place}&category=${category}`,
    );
    return request.data.products;
  } catch (err) {
    throw new Error('An error occurred');
  }
};

export const getProducts = async (
  place: 'all' | 'local' | 'online',
  category?: string,
): Promise<Product[]> => {
  if (category) return getAllProductsWithCategory(place, category);
  return getAllProductsFrom(place);
};
