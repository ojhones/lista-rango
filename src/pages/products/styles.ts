import styled from "styled-components";

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

  min-height: calc(100vh -3.6rem);

  display: grid;
  grid-template-areas: "top  top  top  top"
                       "left left left right"
                       "left left left right"
                       "left left left right";

`;

export const ContentTop = styled.div`
  width: 100%;
  min-height: 10.5625rem;
  padding: 2.18rem 1rem 0.62rem 1rem;

  grid-area: top;
`;

export const ContentLeft = styled.div`
  padding: 1rem 8.37rem 1rem 1rem;

  grid-area: left;

  background: red;
`;

export const ContentRight = styled.div`
  padding: 1rem;

  grid-area: right;

  background: gray;
`;