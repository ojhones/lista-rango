import styled from "styled-components";

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;

`;

export const ContentLeft = styled.div`
  width: 9.06rem;
  height: 9.06rem;

  img {
    width:100%;
    height: auto;

    object-fit: contain;
  }
`;

export const ContentRight = styled.div`
  padding-left: 1rem;

  display: flex;
  flex-direction: column;
  
  h1 {
    text-align: left;
    font-size: 1.5rem;
    letter-spacing: 0px;
    color: ${colors.black};
    font-family: "Montserrat";
  }

  p {
    margin: 0.3rem 0;
    max-width: 529px;

    font-size:1rem;
    text-align: left;
    letter-spacing: 0px;
    color: ${colors.black};
    font-family: "Montserrat";
  }

  span, strong {
    font-size:0.75rem;
    text-align: left;
    letter-spacing: 0px;
    color: ${colors.black};
    font-family: "Montserrat";
  }
`;

