import Link from 'next/link';
import Image from 'next/image';

import { Address } from '../../Interfaces/Restaurant';

import defaultImage from '../../../public/png/nature.png';

import * as S from './styles';

interface EstablishmentCardProps {
  slug: string;
  isOpen?: boolean;
  establishmentName?: string;
  establishmentAddress?: Address[];
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
    <Link href={`/menu/${slug}`} passHref>
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
