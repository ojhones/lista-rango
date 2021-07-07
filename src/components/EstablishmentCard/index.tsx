import * as S from './styles';

export function EstablishmentCard() {
  return (
    <S.Container>
      <S.ContentLeft>
        <img src="/png/nature.png" alt="Nature Food" />
      </S.ContentLeft>

      <S.ContentRight>
        <S.StablishmentTitle>
          Nome do Restaurante
        </S.StablishmentTitle>

        <S.StablishmentAddress>
          Endereço do restaurante
        </S.StablishmentAddress>
      </S.ContentRight>
    </S.Container>
  )
}