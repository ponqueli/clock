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
    line-height: 2rem;
    margin-bottom: auto;
    margin-top: 2rem;
  }

  h1 {
    margin-bottom: auto;
    font-size: 15rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text_primary};
  }
`;

export default GlobalStyle;