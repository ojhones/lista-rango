import Image from 'next/image'

import natureImg from '../../../public/png/nature.png';

import * as S from './styles';

interface EstablishmentCardProps {
  isOpen: boolean,
  EstablishmentName: string,
  EstablishmentAddress: string,
  EstablishmentImage?: string,
}

export function EstablishmentCard({ isOpen, EstablishmentName, EstablishmentAddress, EstablishmentImage }: EstablishmentCardProps) {
  return (
    <S.Container>
      <S.ContentLeft>
        {EstablishmentImage || <Image src={natureImg} alt="Image default" />}
      </S.ContentLeft>

      <S.ContentRight>
        <S.EstablishmentName>
          {EstablishmentName}
        </S.EstablishmentName>

        <S.EstablishmentAddress>
          {EstablishmentAddress}
        </S.EstablishmentAddress>
      </S.ContentRight>


      <S.IndicatorOpen isOpen={isOpen}>
        {isOpen ? (
          <p>Aberto agora</p>
        ) : (
          <p>Fechado</p>
        )}
      </S.IndicatorOpen>
    </S.Container >
  )
}