import { Products } from '~/interfaces/Products';

import { api } from '~/services/api';

interface GetProductsProps {
  id: string;
}

export async function getProducts({ id }: GetProductsProps): Promise<Products> {
  try {
    const {
      data: { products },
    } = await api.get<{ products: Products }>(`/products/${id}`);

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    throw new Error('Erro ao listar os Produtos');
  }
}
