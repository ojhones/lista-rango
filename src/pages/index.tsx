import { GetStaticProps } from 'next';

import { api } from '../services/api';

import { createSlug } from '../utils/createSlug';

import { SEO, Header, InputSearch, EstablishmentCard } from '../components';

import * as S from '../styles/pages/index';

type Address = {
  city?: string;
  state?: string;
  number?: number;
  street?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
  postalCode?: string;
  countryCode?: string;
  neighborhood?: string;
};

interface IRestaurants {
  id: string;
  name: string;
  slug: string;
  image: string;
  imageUrl: string;
  addresses: Address[];
  workSchedules?: any;
}

interface HomeProps {
  restaurants: IRestaurants[];
}

export default function Home({ restaurants }: HomeProps) {
  return (
    <S.Container>
      <Header isBack />

      <S.Wrapper>
        <SEO
          title="Lista Rango"
          description="Bem vindo à página inicial do lista Rango!"
        />

        <S.Title>Bem-vindo ao Lista Rango</S.Title>

        <InputSearch />

        <S.WrapperContent>
          {restaurants.map(restaurant => (
            <EstablishmentCard
              key={restaurant.id}
              slug={restaurant.slug}
              // isOpen={restaurant.isOpen}
              establishmentName={restaurant.name}
              establishmentAddress={restaurant.addresses}
              establishmentImage={restaurant.image || restaurant.imageUrl}
            />
          ))}
        </S.WrapperContent>
      </S.Wrapper>
    </S.Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('restaurants');

  const restaurants = data.restaurants.map(restaurant => {
    return {
      id: restaurant.id,
      name: restaurant.name,
      image: restaurant.image,
      imageUrl: restaurant.imageUrl,
      addresses: restaurant.addresses,
      slug: createSlug(restaurant.name),
      workSchedules: restaurant.workSchedules,
    };
  });

  return {
    props: {
      restaurants,
    },
    revalidate: 60 * 60 * 14, // 14 hours
  };
};
