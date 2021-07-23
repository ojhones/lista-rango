import Link from 'next/link';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import * as S from './styles';

interface HeaderProps {
  isLink?: boolean;
}

export function Header({ isLink }: HeaderProps) {
  return (
    <S.Container>
      <S.Wrapper>
        {isLink ?? (
          <Link href="/">
            <AiOutlineArrowLeft size={25} />
          </Link>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
