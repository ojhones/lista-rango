import Image from 'next/image'

import natureImg from '../../../public/png/nature.png';

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
        {StablishmentImage || <Image src={natureImg} alt="Image default" />}
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