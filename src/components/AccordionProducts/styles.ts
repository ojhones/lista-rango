import styled from "styled-components";

import colors from '../../styles/colors'

export const Container = styled.div`
  width: 100%;
  max-width: 802px;
  padding-top: 1.5rem;

  p, strong {
    font-size: 1rem;
    letter-spacing: 0px;
    font-family: "Montserrat";
  }

  .accordion {
    margin: 0;
    width: 90%;
    border: none;
    border-radius: 2px;
    border-bottom: 1px solid ${colors.gray300};    
  }

  .accordion__item {
    margin-bottom: 20px;
    :first-child {
      margin-top: 2rem;
    }
  }

  .accordion__button {
    width: 100%;
    cursor: pointer;
    padding: 1rem 0 0 1rem;
  
    font-weight: 500;
    text-align: left;
    user-select: none;
    background: transparent;
    font-family: "Montserrat";
  }

  .accordion__button:after {
    width: 0.56rem;
    height: 0.56rem;
    margin-top: 0.37rem;
    margin-right: 0.75rem;
    border-right: 1px solid ${colors.gray300} ;
    border-bottom: 1px solid ${colors.gray300};
    
    display: inline-block;

    content: "";
    float: right;
    transform: rotate(-45deg);
  }
  
  .accordion__button:before {
    display: none;
  }

  .accordion__button[aria-expanded="true"]::after,
  .accordion__button[aria-selected="true"]::after {
    transform: rotate(45deg);
  }

  .accordion__panel {
    padding: 1rem 2rem 0 2rem;
    
    color: #888888;
    font-size: 1rem;
    animation: fadein 0.35s ease-in;

    a {
      color: inherit;
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
