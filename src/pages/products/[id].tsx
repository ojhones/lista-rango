import { GetStaticPaths, GetStaticProps } from 'next';

import { Product } from '~/interfaces/Products';

import * as S from '~/styles/pages/menu';

import {
  SEO,
  InputSearch,
  AccordionProducts,
  EstablishmentDetail,
} from '~/components';

interface ProductsSeparatedByCategory {
  [key: string]: Product[];
}

interface ProductsProps {
  products: ProductsSeparatedByCategory;
}

export default function Products({ products }: ProductsProps) {
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

          <AccordionProducts products={products} />
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

    const productsData = await getProducts({
      id: String(params.id),
    });

    const productsSeparatedByCategory: ProductsSeparatedByCategory = {};

    productsData.forEach(product => {
      if (!productsSeparatedByCategory[product.category.name]) {
        productsSeparatedByCategory[product.category.name] = [];
      }

      productsSeparatedByCategory[product.category.name].push(product);
    });

    return {
      props: {
        products: productsSeparatedByCategory,
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
