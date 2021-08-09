import { FaSearch } from 'react-icons/fa';

import * as S from './styles';

export function InputSearch() {
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Buscar estabelecimento"
        onClick={() => console.log('Opa, você clicou!')}
      />

      <button type="button">
        <FaSearch />
      </button>
    </S.Container>
  );
}
