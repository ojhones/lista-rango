import Link from 'next/link';
import Image from 'next/image';

import { Address } from '~/interfaces/Restaurant';

import defaultImage from '../../../public/png/nature.png';

import * as S from './styles';

export interface EstablishmentCardProps {
  id: string;
  isOpen?: boolean;
  establishmentName?: string;
  establishmentAddress?: Address[];
  establishmentImage?: string | any;
}

export function EstablishmentCard({
  id,
  isOpen,
  establishmentName,
  establishmentImage,
  establishmentAddress,
}: EstablishmentCardProps) {
  return (
    <Link href={`/products/${id}`} passHref>
      <S.Container>
        <S.ContentLeft>
          <Image
            width={100}
            height={100}
            alt="Image default"
            src={establishmentImage || defaultImage}
          />
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
          <p>Aberto agora</p>
        </S.IndicatorOpen>
      </S.Container>
    </Link>
  );
}
