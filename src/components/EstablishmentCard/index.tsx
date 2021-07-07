import * as S from './styles';

interface EstablishmentCardProps {
  isOpen: boolean,
  StablishmentName: string,
  StablishmentAddress: string,
  StablishmentImage?: string,
}

export function EstablishmentCard({ isOpen, StablishmentName, StablishmentAddress, StablishmentImage }: EstablishmentCardProps) {
  return (
    <S.Container>
      <S.ContentLeft>
        {StablishmentImage || <img src="/png/nature.png" alt="Nature Food" />}
      </S.ContentLeft>

      <S.ContentRight>
        <S.StablishmentName>
          {StablishmentName}
        </S.StablishmentName>

        <S.StablishmentAddress>
          {StablishmentAddress}
        </S.StablishmentAddress>
      </S.ContentRight>


      <S.IndicatorOpen isOpen={isOpen}>
        {isOpen ? (
          <p>Aberto agora</p>
        ) : (
          <p>Feachado</p>
        )}
      </S.IndicatorOpen>
    </S.Container >
  )
}