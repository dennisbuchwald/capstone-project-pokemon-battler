import React from "react";
import styled from "styled-components";
import SoundEffects from "../SoundEffect/SoundEffect";

export default function Bag({ onPotionUse, onClose, potionCount }) {
  const handleBagClick = () => {
    onPotionUse();
    playSound("menuSound");
  };

  const [playSound, stopSound] = SoundEffects();
  const [hoveredButton, setHoveredButton] = React.useState(null);

  return (
    <BagContainer>
      <BagButton
        onClick={() => {
          handleBagClick();
          playSound("menuSound");
        }}
        onMouseEnter={() => {
          playSound("menuSound");
          setHoveredButton(3);
        }}
        onMouseLeave={() => {
          stopSound("menuSound");
          setHoveredButton(null);
        }}
      >
        {hoveredButton === 3 && <CursorImage src="/sprites/cursor.png" />}
        {potionCount}x Supertrank
      </BagButton>
      <BagButtonBack
        onClick={onClose}
        onMouseEnter={() => {
          playSound("menuSound");
          setHoveredButton(4);
        }}
        onMouseLeave={() => {
          stopSound("menuSound");
          setHoveredButton(null);
        }}
      >
        {hoveredButton === 4 && <CursorImage src="/sprites/cursor.png" />}
        Zurueck
      </BagButtonBack>
    </BagContainer>
  );
}

const BagContainer = styled.section`
  grid-gap: 5px;
  position: absolute;
  background-image: url("/sprites/menu-options-box.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 44%;
  right: 0%;
  position: absolute;
  height: 80px;
  bottom: 0%;
  z-index: 2;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0px;
  grid-auto-columns: minmax(0, 1fr);
`;

const BagButton = styled.button`
  bottom: 7%;
  color: black;
  position: relative;
  font-family: "PokemonFireRed", "Press Start 2P", -apple-system,
    BlinkMacSystemFont, Segoe UI;
  font-size: 0.7rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  min-width: 0;
  display: inline-block;
  margin: 2.5px;
  background-color: lightgray;
  border-radius: 7px;
  box-shadow: 0 0.2em gray;
  cursor: pointer;
  &:active {
    box-shadow: none;
    position: relative;
    top: 0.2em;
  }
`;

const BagButtonBack = styled(BagButton)``;

const CursorImage = styled.img`
  position: absolute;
  left: -7px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: auto;
`;
