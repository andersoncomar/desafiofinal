import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root{
    height: 100%;
  }

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: Helvetica, Arial, sans-serif;
  height: 100%;
}

input, button{
  font-family: Helvetica, Arial, sans-serif;
}

button{
  cursor: pointer;
}

`;

export default GlobalStyle;
