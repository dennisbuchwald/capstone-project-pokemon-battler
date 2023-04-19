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
          setHoveredButton(1);
        }}
        onMouseLeave={() => {
          stopSound("menuSound");
          setHoveredButton(null);
        }}
      >
        {hoveredButton === 1 && <CursorImage src="/sprites/cursor.png" />}
        {potionCount}x Supertrank
      </BagButton>
      <BagButtonBack
        onClick={onClose}
        onMouseEnter={() => {
          playSound("menuSound");
          setHoveredButton(2);
        }}
        onMouseLeave={() => {
          stopSound("menuSound");
          setHoveredButton(null);
        }}
      >
        {hoveredButton === 2 && <CursorImage src="/sprites/cursor.png" />}
        Zurueck
      </BagButtonBack>
    </BagContainer>
  );
}

const BagContainer = styled.section`
  background-image: url("/sprites/menu-options-box.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 44%;
  padding: 10px;
  position: absolute;
  width: 44%;
  height: 80px;
  right: 0.5%;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 0px;
  grid-auto-columns: minmax(0, 1fr);
`;

const BagButton = styled.button`
  color: black;
  position: relative;
  font-family: "PokemonFireRed", "Press Start 2P", -apple-system,
    BlinkMacSystemFont, Segoe UI;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  min-width: 0;
  display: inline-block;
  margin: 5px;
  padding: 3.5px 3.5px 3.5px 3.5px;
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
