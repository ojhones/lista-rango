import Link from 'next/link';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import * as S from './styles';

interface HeaderProps {
  goBack?: boolean;
}

export function Header({ goBack }: HeaderProps) {
  return (
    <S.Container>
      <S.Wrapper>
        {goBack && (
          <Link href="/">
            <a>
              <AiOutlineArrowLeft size={25} color="#fff" />
            </a>
          </Link>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
