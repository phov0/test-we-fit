import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #2F2E41;
    font-family: Open Sans, sans-serif;
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  #root{
    max-width: 960px;
    margin:auto;

  }
`