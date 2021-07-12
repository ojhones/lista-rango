import * as S from '../../styles/pages/menu';

import {
  SEO,
  Header,
  InputSearch,
  AccordionProducts,
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
          <EstablishmentDetail 
            establishmentName="Nome do Restaurante" 
            establishmentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </S.ContentTop>

        <S.ContentLeft>
          <InputSearch />

          <AccordionProducts />
        </S.ContentLeft>

        <S.ContentRight />

      </S.Wrapper>
    </S.Container>
  );     
}