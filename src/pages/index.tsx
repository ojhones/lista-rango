import { useEffect } from 'react';
import { GetStaticProps } from 'next';

import { api } from '~/services/api';

import { Restaurant } from '~/interfaces/Restaurant';

import { useRestaurants } from '~/hooks/restaurants';

import { SEO, Header, InputSearch, EstablishmentCard } from '~/components';

import * as S from '~/styles/pages/index';

interface HomeProps {
  restaurants: Restaurant[];
}

export default function Home({ restaurants: originalRestaurants }: HomeProps) {
  const { setRestaurants, filteredRestaurants } = useRestaurants();

  useEffect(() => {
    setRestaurants(originalRestaurants);
  }, [setRestaurants]);

  return (
    <S.Container>
      <Header isBack />

      <SEO
        title="Lista Rango"
        description="Bem vindo à página inicial do lista Rango! #NascemosParaServir!"
      />

      <S.Wrapper>
        <S.Title>Bem-vindo ao Lista Rango</S.Title>

        <InputSearch />

        <S.WrapperContent>
          {filteredRestaurants.map(restaurant => (
            <EstablishmentCard
              key={restaurant.id}
              id={restaurant.id}
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
      workSchedules: restaurant.workSchedules,
    };
  });

  return {
    props: {
      restaurants,
    },
    revalidate: 60 * 60 * 1, // 1 hours
  };
};
