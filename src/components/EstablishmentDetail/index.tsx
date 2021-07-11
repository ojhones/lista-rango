import Image from 'next/image'

import natureImg from '../../../public/png/nature.png';

import * as S from "./styles"

export function EstablishmentDetail() {
  return(
    <S.Container>

      <S.ContentLeft>
        <Image src={natureImg} alt="Image default" />
      </S.ContentLeft>

      <S.ContentRight>
        <h1>Nome do restaurante</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <span>Segunda a Sexta: <strong>11:30 às 15:00</strong></span>
        <span>Sábados:<strong>11:30 às 22:00</strong></span>
        <span>Domingos e Feriados:<strong>11:30 às 15:00</strong></span>
      </S.ContentRight>

    </S.Container>
  )
}