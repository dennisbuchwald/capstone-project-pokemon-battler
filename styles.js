import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
  font-family: 'PokemonFireRed';
  src: url('/fonts/pokemon_fire_red.ttf');
  font-weight: normal;
  font-style: normal;
}

  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: "PokemonFireRed", system-ui;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "PokemonFireRed", -apple-system, BlinkMacSystemFont, Segoe UI;
  }
`;
