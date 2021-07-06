import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
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
`;

export const WrapperContent = styled.section`
  width: 100%;
  padding: 2.87rem 5.8125rem 0 5.8125rem;

  display: grid;
  gap: 2.56rem 3rem;
  grid-template-columns: repeat(3, 1fr);
`;
