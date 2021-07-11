import * as S from './styles'

import {
  SEO,
  Header,

} from '../../components'

export default function Products() {
  return (
    <S.Container>
      
      <Header />
     
      <S.Wrapper>

        <SEO 
          title="Produtos" 
          description="Escolha o produto que quiser do restaurante que você escolheu :)"
        />

        <S.ContentTop>
          <p>oi</p>
        </S.ContentTop>

        <S.ContentLeft>
          <p>oi</p>
        </S.ContentLeft>

        <S.ContentRight>
          <p>oi</p>
        </S.ContentRight>

      </S.Wrapper>
    </S.Container>
  );     
}