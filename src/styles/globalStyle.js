import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.primary};
    font-family: 'Roboto', sans-serif;
  };

  h1, h2, h3, h4, h5, h6, p, span, div, footer, section, header{
    margin: 0;
    padding: 0;
  }
`;