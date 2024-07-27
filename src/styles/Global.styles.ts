import { createGlobalStyle } from "styled-components";
import { Thema } from "./Thema";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;padding:0;
        box-sizing: border-box;
    }
    
    body {
  margin: 0;
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
}

a {
    text-decoration: none;
}
ul {
    list-style: none;

    
}
li {
    color: ${Thema.colors.secondaryBg}

    
}

p {
    color:${Thema.colors.secondaryBg};
    
}
a {
    color:${Thema.colors.secondaryBg}
}
button {
    background-color: unset;
    border: none;
}
header {
    
}
section:nth-of-type(0) {
    background-color: ${Thema.colors.primeryBg};
}
h4 {
    font-weight: 400
}
h1{
    font-weight: 400
}
`