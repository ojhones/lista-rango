import { Product } from '~/interfaces/Products';

import { api } from '~/services/api';

interface GetProductsProps {
  id: string;
}

export async function getProducts({
  id,
}: GetProductsProps): Promise<Product[]> {
  try {
    const {
      data: { products },
    } = await api.get<{ products: Product[] }>(`/products/${id}`);

    return products;
  } catch (error) {
    throw new Error('Erro ao listar os Produtos');
  }
}
