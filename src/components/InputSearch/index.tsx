import { FaSearch } from 'react-icons/fa';

import { useSearch } from '../../hooks/Search';

import * as S from './styles';

interface InputSearchProps {
  onSearch: () => void;
}

export function InputSearch({ onSearch }: InputSearchProps) {
  const { search, setSearch } = useSearch();

  return (
    <S.Container>
      <input
        type="text"
        placeholder="Buscar estabelecimento"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button type="button" onClick={onSearch}>
        <FaSearch />
      </button>
    </S.Container>
  );
}
