import { FaSearch } from 'react-icons/fa';

import * as S from './styles';

interface InputSearchProps {
  onSearch: () => void;
}

export function InputSearch({ onSearch }: InputSearchProps) {
  return (
    <S.Container>
      <input type="text" placeholder="Buscar estabelecimento" />

      <button type="button" onClick={onSearch}>
        <FaSearch />
      </button>
    </S.Container>
  );
}
