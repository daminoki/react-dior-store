import { apiHelper } from './apiHelper';

export const getItems = async (params) => apiHelper('get', 'products', params);

export const updateItem = async (id, product) =>
  apiHelper('put', `products/${id}`, product);
