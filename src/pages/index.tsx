import { useState } from 'react';
import { GetStaticProps } from 'next';

import { useSearch } from '../hooks/Search';
import { Restaurant } from '../Interfaces/Restaurant';

import { api } from '../services/api';
import { createSlug } from '../utils/createSlug';

import { SEO, Header, InputSearch, EstablishmentCard } from '../components';

import * as S from '../styles/pages/index';

interface HomeProps {
  restaurants: Restaurant[];
}

export default function Home({ restaurants }: HomeProps) {
  const { search } = useSearch();
  const [filter, setFilter] = useState(restaurants);

  function handleSearch() {
    const filterTeste = restaurants.filter(restaurant =>
      restaurant.name.includes(search),
    );
    setFilter(filterTeste);
    console.log('filter', filter);
  }

  return (
    <S.Container>
      <Header isBack />

      <S.Wrapper>
        <SEO
          title="Lista Rango"
          description="Bem vindo à página inicial do lista Rango! #NascemosParaServir!"
        />

        <S.Title>Bem-vindo ao Lista Rango</S.Title>

        <InputSearch onSearch={handleSearch} />

        <S.WrapperContent>
          {filter.map(restaurant => (
            <EstablishmentCard
              key={restaurant.id}
              slug={restaurant.slug}
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
    revalidate: 60 * 60 * 1, // 1 hours
  };
};
