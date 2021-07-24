import Link from 'next/link';
import Image from 'next/image';

import natureImg from '../../../public/png/nature.png';

import * as S from './styles';

type AddressProps = {
  city?: string;
  state?: string;
  number?: number;
  street?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
  postalCode?: string;
  countryCode?: string;
  neighborhood?: string;
};

interface EstablishmentCardProps {
  slug: string;
  isOpen?: boolean;
  establishmentName?: string;
  establishmentImage?: string | any;
  establishmentAddress: AddressProps[];
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

          {establishmentAddress.map(localization => (
            <p>
              {`
                ${localization.street},
                ${localization.number},
                ${localization.neighborhood},
                ${localization.city}
              `}
            </p>
          ))}
        </S.ContentRight>

        <S.IndicatorOpen isOpen={isOpen}>
          {isOpen ? <p>Aberto agora</p> : <p>Fechado</p>}
        </S.IndicatorOpen>
      </S.Container>
    </Link>
  );
}
