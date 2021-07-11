import * as S from '../styles/pages/index';

import { data } from '../components/EstablishmentCard/data'

import {
  SEO,
  Header,
  InputSearch,
  EstablishmentCard,
} from '../components';

export default function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        
        <Header />

        <SEO
          title="Lista Rango"
          description="Bem vindo à página inicial do lista Rango!"
        />

        <S.Title>Bem-vindo ao Lista Rango</S.Title>

        <InputSearch />

        <S.WrapperContent>
          {data.map(item => (
            <EstablishmentCard
              key={item.id}
              isOpen={item.isOpen}
              EstablishmentName='Nome do Restaurante'
              EstablishmentAddress="Endereço do restaurante"
            />
          ))}
        </S.WrapperContent>
      </S.Wrapper>
    </S.Container>
  )
}
