import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 2.5rem;
  max-width: 840px;
  border-radius: 16px;
  box-shadow: 0px 2px 4px ${colors.gray300};

  display: flex;
  align-items: center;
  justify-content: center;

  input{
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 1.1875rem;
    border-radius: 16px 0 0  16px;
  }

  button{
    width: 10%;
    height: 100%;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;

    svg{
      transition: 0.2s;
      color: ${colors.black};
    }

    :hover svg {
        width: 1.25rem;
        height: 1.25rem;
      }
  }
`;

