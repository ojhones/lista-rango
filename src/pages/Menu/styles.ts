import styled from "styled-components";

import colors from '../../styles/colors'

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 4.62rem;
  min-height: calc(100vh -3.6rem);

  display: grid;
  grid-template-areas: "top  top  top  top"
                       "left left left right"
                       "left left left right"
                       "left left left right";

`;

export const ContentTop = styled.div`
  min-height: 11.56rem;

  display: flex;
  grid-area: top;
  align-items: center;
`;

export const ContentLeft = styled.div`
  padding-right: 8.37rem;
 
  grid-area: left;
`;

export const ContentRight = styled.div`
  border-radius: 4px;
  min-height: 47.81rem;

  grid-area: right;

  background: ${colors.gray300};
`;