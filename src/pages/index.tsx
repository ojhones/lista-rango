import * as S from '../styles/pages/index';

import { data } from '../components/EstablishmentCard/data'

import {
  SEO,
  InputSearch,
  EstablishmentCard,
} from '../components';

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

        <S.WrapperContent>
          {data.map(item => (
            <EstablishmentCard
              key={item.id}
              isOpen={item.isOpen}
              StablishmentName='Nome do Restaurante'
              StablishmentAddress="Endereço do restaurante"
            />
          ))}
        </S.WrapperContent>
      </S.Wrapper>
    </S.Container>
  )
}
