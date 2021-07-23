import Image from 'next/image';

import natureImg from '../../../public/png/nature.png';

import * as S from './styles';

interface EstablishmentDetailProps {
  establishmentName: string;
  establishmentDescription: string;
  establishmentImage?: string | any;
}

export function EstablishmentDetail({
  establishmentName,
  establishmentImage,
  establishmentDescription,
}: EstablishmentDetailProps) {
  return (
    <S.Container>
      <S.ContentLeft>
        <Image
          src={establishmentImage || natureImg}
          alt={establishmentName || 'Default image'}
        />
      </S.ContentLeft>

      <S.ContentRight>
        <h1>{establishmentName}</h1>

        <p>{establishmentDescription}</p>

        <span>
          Segunda a Sexta: <strong>11:30 às 15:00</strong>
        </span>
        <span>
          Sábados:<strong>11:30 às 22:00</strong>
        </span>
        <span>
          Domingos e Feriados:<strong>11:30 às 15:00</strong>
        </span>
      </S.ContentRight>
    </S.Container>
  );
}
