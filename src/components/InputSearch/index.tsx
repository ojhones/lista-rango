import { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';
import { useRestaurants } from '../../hooks/restaurants';

import * as S from './styles';

export function InputSearch() {
  const [searchValue, setSearchValue] = useState('');
  const { searchRestaurants } = useRestaurants();

  useEffect(() => {
    searchRestaurants({ value: searchValue });
  }, [searchValue]);

  return (
    <S.Container>
      <input
        type="text"
        placeholder="Buscar estabelecimento"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />

      <button type="button">
        <FaSearch />
      </button>
    </S.Container>
  );
}
