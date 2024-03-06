import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`  
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ul,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 16px; 
    background-color: #eefbf8;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [role="button"] {
    cursor: pointer;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  } 
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Reset CSS */

  * { 
    font-family: Montserrat, sans-serif;
    transition: all .25s ease;
    line-height: 24px;  
    font-weight: 500;
    color: #3D3D3D; 
  }

  h4 {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;  
    font-weight: bold;
  }

  body {
    background-image: url(/images/main-background-desktop.png); 
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}

`

export default GlobalStyle
