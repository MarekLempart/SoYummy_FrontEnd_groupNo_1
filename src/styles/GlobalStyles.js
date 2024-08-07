// src/styles/GlobalStyles.js

import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  position: relative;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  background-color: ${(p) => p.theme.colors.bgMain};
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
  list-style: none;
  padding-left: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
button {
  border: none;
  margin: 0;
  padding: 0;
   cursor: pointer;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
input {
  all: unset;
}
`;
