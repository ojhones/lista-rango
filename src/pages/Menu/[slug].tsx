import * as S from './styles'

import {
  SEO,
  Header,
  InputSearch,
  EstablishmentDetail,
} from '../../components'

export default function Menu() {
  return (
    <S.Container>
      
      <Header />
     
      <S.Wrapper>

        <SEO 
          title="Menu" 
          description="Escolha escolha seu prato! :)"
        />

        <S.ContentTop>
          <EstablishmentDetail />
        </S.ContentTop>

        <S.ContentLeft>
          <InputSearch />
        </S.ContentLeft>

        <S.ContentRight>

        </S.ContentRight>

      </S.Wrapper>
    </S.Container>
  );     
}