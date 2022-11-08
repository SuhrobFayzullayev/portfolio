// Libraries
import { createGlobalStyle } from "styled-components";

// Fonts
import SonnyCond from "./../Fonts/SonnyCond-Light.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SonnyCond";
    src: url(${SonnyCond});
  }
  p, h1, h2, h3, h4, h5, h6, a, span, button, font, ::placeholder {
    font-family: "SonnyCond";
  } 
 
  body{
    background-color: #070640;
    
  }
`;
export default GlobalStyle;
