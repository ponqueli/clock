import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
  }

  html {
    @media (max-width: 1025px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 769px) {
      font-size: 87.5%; //14px
    }

    @media (max-width:  320px) {
      font-size: 75%; //12px
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text_primary};
    overflow:hidden;
    -webkit-font-smoothing: antialiased;
  }

  p {
    font-size: 2rem;
    margin-bottom: auto;
    margin-top: 2rem;
    text-align: center;
    border: 2px solid transparent;
    padding: 0.5rem;
    
    :hover {
      padding: 0.5rem;
      box-shadow: 0px 0px 25px rgb(255, 234, 0);
      border-radius: 1.125rem;
      border: 2px solid rgb(255, 234, 0);
    }

    @media (max-width: 421px) {
      font-size: 1.8rem;
    }

    @media (max-width: 389px) {
      font-size: 1.5rem;
    }
  }

  h1 {
    text-align: center;
    margin-bottom: auto;
    font-size: 15rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text_primary};

    :hover {
      padding-left: 1rem;
      padding-right: 1rem;
      box-shadow: 0px 0px 25px rgb(255, 234, 0);
      border-radius: 1.125rem;
      border: 2px solid rgb(255, 234, 0);
    }

    @media (max-width: 1378px) {
      font-size: 12rem;
    }

    @media (max-width: 1103px) {
      font-size: 11rem;
    }

    @media (max-width: 958px) {
      font-size: 10rem;
    }

    @media (max-width: 856px) {
      font-size: 9rem;
    }

    @media (max-width: 801px) {
      font-size: 9rem;
    }

    @media (max-width: 769px) {
      font-size: 8rem;
    }

    @media (max-width:  652px) {
      font-size: 7rem;
    }

    @media (max-width: 561px) {
      font-size: 6rem;
    }

    @media (max-width:  475px) {
      font-size: 5rem;
    }

    @media (max-width: 421px) {
      font-size: 4rem;
    }

    @media (max-width:  320px) {
      font-size: 6rem;
    }
  }
`;

export default GlobalStyle;