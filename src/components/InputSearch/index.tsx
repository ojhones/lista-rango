import { FaSearch } from 'react-icons/fa';

import * as S from './styles';

export function InputSearch() {
  return (
    <S.Container>
      <input type="text" placeholder="Buscar estabelecimento" />

      <button type="button">
        <FaSearch />
      </button>
    </S.Container>
  );
}
