import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: #27AE60;
  --color-primary-50: #93D7AF;
  --color-secondary: #EB5757;

  --color-negative: #E60000;
  --color-warning: #FFCD07;
  --color-sucess: #168821
  --color-information: #155BCB;

  --gray-100: #333333;
  --gray-50: #828282;
  --gray-20: #E0E0E0;
  --gray-0: #F5F5F5;
  --white: #ffffff;

  --font-size-0: 2.375rem;
  --font-size-1: 1.75rem;
  --font-size-2: 1.5rem;
  --font-size-3: 1.25rem;
  --font-size-4: 1rem;
  --font-size-5: 0.875rem;
  --font-size-6: 0.75rem;

  --font-bold: 700;
  --font-semibold: 600;  
  --font-regular: 400;

  --border-radius-1: 5px;
  --border-radius-2: 8px;

}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }
  a {
    color: unset;
    text-decoration: none;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  li,
  button,
  input {
    font-family: "Roboto", sans-serif;
  }

`;
