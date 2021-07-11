import * as S from './styles'

import {
  SEO,
  Header,
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
       
        </S.ContentTop>

        <S.ContentLeft>
          
        </S.ContentLeft>

        <S.ContentRight>

        </S.ContentRight>

      </S.Wrapper>
    </S.Container>
  );     
}