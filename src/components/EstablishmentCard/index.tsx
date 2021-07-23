import Link from 'next/link';
import Image from 'next/image';

import natureImg from '../../../public/png/nature.png';

import * as S from './styles';

interface EstablishmentCardProps {
  slug: String;
  isOpen: boolean;
  establishmentName?: string;
  establishmentAddress?: string;
  establishmentImage?: string | any;
}

export function EstablishmentCard({
  slug,
  isOpen,
  establishmentName,
  establishmentImage,
  establishmentAddress,
}: EstablishmentCardProps) {
  return (
    <Link href={`/Menu/${slug}`} passHref>
      <S.Container>
        <S.ContentLeft>
          <Image src={establishmentImage || natureImg} alt="Image default" />
        </S.ContentLeft>

        <S.ContentRight>
          <h3>{establishmentName}</h3>

          <p>{establishmentAddress}</p>
        </S.ContentRight>

        <S.IndicatorOpen isOpen={isOpen}>
          {isOpen ? <p>Aberto agora</p> : <p>Fechado</p>}
        </S.IndicatorOpen>
      </S.Container>
    </Link>
  );
}
