import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 6.25rem;
  max-width: 22.9375;
  border-radius: 4px;
  box-shadow: 0px 2px 4px ${colors.gray300};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentLeft = styled.div`
  width: 6.25rem;
  height: 6.25rem;

  img{
    width: 97%;
    height: auto;

    object-fit: contain;
  }
`

export const ContentRight = styled.div`
  flex: 1;
  padding: 2rem 1.65rem;
`

export const StablishmentTitle = styled.h3`
  font-size: 1rem;
  text-align: left;
  letter-spacing: 0px;
  color: ${colors.black};
`

export const StablishmentAddress = styled.p`
  font-size: 0.75rem;
  text-align: left;
  letter-spacing: 0px;
  color: ${colors.black};
`
