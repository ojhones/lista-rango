import { GetStaticPaths, GetStaticProps } from 'next';

import { Product } from '~/interfaces/Products';

import * as S from '~/styles/pages/menu';

import {
  SEO,
  InputSearch,
  AccordionProducts,
  EstablishmentDetail,
} from '~/components';

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  console.log('products', products);
  return (
    <S.Container>
      <S.Wrapper>
        <SEO title="Menu" description="Escolha escolha seu prato! :)" />

        <S.ContentTop>
          <EstablishmentDetail
            establishmentName="Nome do Restaurante"
            establishmentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </S.ContentTop>

        <S.ContentLeft>
          <InputSearch />

          <AccordionProducts />
        </S.ContentLeft>

        <S.ContentRight />
      </S.Wrapper>
    </S.Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { getProducts } = await import('~/services/functions/getProducts');

    const products = await getProducts({
      id: String(params.id),
    });

    return {
      props: {
        products,
      },
      revalidate: 60 * 60 * 24, // 24 hours
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
};
