import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --Roboto: "Roboto", sans-serif;
  --Montserrat: "Montserrat", sans-serif;
  --RedHat: "Red Hat Display", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: var(--Roboto);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  -webkit-font-smoothing: antialiased ;
  text-rendering: optimizeLegibility ;
  overflow-y: auto;
  font-family: var(--Roboto);
}

h1, h2, h3, h4, h5, h6, h1 > *, h2 > *, h3 > *, h4> *, * {
  font-family: var(--Roboto);
}
`;
