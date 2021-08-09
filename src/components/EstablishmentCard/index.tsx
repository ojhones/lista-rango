import Link from 'next/link';
import Image from 'next/image';

import { Address } from '../../Interfaces/Restaurant';

import * as S from './styles';

interface EstablishmentCardProps {
  slug: string;
  isOpen?: boolean;
  establishmentName?: string;
  establishmentImage: string;
  establishmentAddress: Address[];
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
            width="auto"
            height="auto"
            alt="Image default"
            src={establishmentImage}
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
