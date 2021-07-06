import * as S from '../styles/pages/index'

import {
  SEO,
  InputSearch,
} from '../components'

export default function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <SEO
          title="Lista Rango"
          description="Bem vindo à página incial do lista Rango!"
        />

        <S.Title>Bem-vindo ao Lista Rango</S.Title>

        <InputSearch />
      </S.Wrapper>
    </S.Container>
  )
}
