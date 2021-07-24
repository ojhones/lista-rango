import Link from 'next/link';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import * as S from './styles';

interface HeaderProps {
  isBack?: boolean;
}

export function Header({ isBack }: HeaderProps) {
  return (
    <S.Container>
      <S.Wrapper>
        {isBack ?? (
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
