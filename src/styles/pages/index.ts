import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.main`
  width: 100vw;
  padding: 0 1rem;
  min-height: calc(100vh - 3.875rem);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1366px;
  min-height: calc(100vh - 3.875rem);

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 2rem 0;

  font-weight: 300;
  font-size: 1.5rem;
  color: ${colors.black};
`;

export const WrapperContent = styled.section`
  width: 100%;
  padding: 2.87rem 5.8125rem 0.5rem 5.8125rem;

  display: grid;
  gap: 2.56rem 3rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 968px) {
    padding: 2.87rem 3.8125rem 0.5rem 3.8125rem;
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    padding: 2.87rem 0.7125rem 0.5rem 0.7125rem;
  }

  @media (max-width: 549px) {
    grid-template-columns: 1fr;
  }
`;
