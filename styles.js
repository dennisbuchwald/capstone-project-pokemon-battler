import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
  font-family: 'PokemonFireRed';
  src: 
       url('/fonts/pokemon_fire_red.woff') format('woff'),
       url('/fonts/pokemon_fire_red.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


@font-face {
  font-family: 'PressStart2P';
  src: url('/fonts/PressStart2P-Regular.woff') format('woff'),
        url('/fonts/PressStart2P-Regular.ttf') format('truetype'),
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
  font-family: 'PokemonFireRed', 'PressStart2P', -apple-system, BlinkMacSystemFont, Segoe UI;
    // background-color: #3a464d;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
  font-family: 'PokemonFireRed', 'PressStart2P', -apple-system, BlinkMacSystemFont, Segoe UI;
  }
`;
