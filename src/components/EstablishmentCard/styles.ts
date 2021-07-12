import styled from 'styled-components';

import colors from '../../styles/colors';

interface IndicatorProps {
  isOpen: boolean;
}

export const Container = styled.a`
  position: relative;

  width: 100%;
  height: 6.25rem;
  max-width: 22.9375;
  border-radius: 4px;
  box-shadow: 0px 2px 4px ${colors.gray300};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform .2s;

  :hover {
    cursor: pointer;
    
    transform: translateY(-0.35rem);
  }
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

  h3 {
    font-size: 1rem;
    text-align: left;
    letter-spacing: 0px;
    color: ${colors.black};
  }

  p {
    font-size: 0.75rem;
    text-align: left;
    letter-spacing: 0px;
    color: ${colors.black};
  }
`


export const IndicatorOpen = styled.span<IndicatorProps>`
  top: -1rem;
  right: -1rem;
  position: absolute;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.purple800};
  opacity: ${({isOpen}) => isOpen ? 1 : 0.5};

  @media(max-width: 767px) {
    top: 1.5rem;
    right: 1rem;
  }

  p{
    text-align: center;
    font-size: 0.5rem;
    font-weight: bold;
    color: ${colors.white};
  }
`;

