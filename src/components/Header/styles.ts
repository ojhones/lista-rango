import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.header`
  width: 100vw;
  height: 3.6rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.green500};
  box-shadow: 0px 4px 8px ${colors.gray300};
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  height: 3.6rem;
  max-width: 1366px;

  display: flex;
  align-items: center;


  a{
    svg{
      color: ${colors.white};
    }
  }
`;
