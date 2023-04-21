import React from "react";
import styled from "styled-components";
import SoundEffects from "../SoundEffect/SoundEffect";

const AttackMenu = ({ onAttackSelection, onBackButtonClick, attacks }) => {
  const handleAttackClick = (index) => {
    onAttackSelection(index);
    playSound("menuSound");
  };

  const [playSound, stopSound] = SoundEffects();
  const [hoveredButton, setHoveredButton] = React.useState(null);

  return (
    <>
      <BackgroundImageContainer />
      <AttackMenuContainer>
        {attacks.map((attack, index) => (
          <AttackButton
            key={index}
            onClick={() => {
              handleAttackClick(index);
              playSound("menuSound");
            }}
            onMouseEnter={() => {
              playSound("menuSound");
              setHoveredButton(index + 1);
            }}
            onMouseLeave={() => {
              stopSound("menuSound");
              setHoveredButton(null);
            }}
            type={attack.type}
          >
            {hoveredButton === index + 1 && (
              <CursorImage src="/sprites/cursor.png" />
            )}
            {attack.name}
          </AttackButton>
        ))}
        <AttackButtonBack
          onMouseEnter={() => {
            playSound("menuSound");
            setHoveredButton(attacks.length + 1);
          }}
          onMouseLeave={() => {
            stopSound("menuSound");
            setHoveredButton(null);
          }}
          onClick={onBackButtonClick}
        >
          {hoveredButton === attacks.length + 1 && (
            <CursorImage src="/sprites/cursor.png" />
          )}
          Zurueck
        </AttackButtonBack>
      </AttackMenuContainer>
    </>
  );
};

const BackgroundImageContainer = styled.section`
  background-image: url("/sprites/attack-box.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;

  width: 100%;
  height: 80px;
  right: 0.5%;
  z-index: 1;
`;

const AttackMenuContainer = styled.section`
  position: absolute;
  width: 60%;
  height: 60px;
  left: 2.5%;
  bottom: 15%;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0px;
  grid-auto-columns: minmax(0, 1fr);
`;

const CursorImage = styled.img`
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: auto;
`;

const AttackButton = styled.button`
  text-transform: uppercase;
  position: relative;
  font-family: "PokemonFireRed", "Press Start 2P", -apple-system,
    BlinkMacSystemFont, Segoe UI;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  min-width: 0;
  display: inline-block;
  margin: 2.5px;
  padding: 3.5px 3.5px 3.5px 3.5px;
  background-color: ${(attacks) =>
    attacks.type === "Gras"
      ? "#78C850"
      : attacks.type === "Gift"
      ? "#A040A0"
      : attacks.type === "Feuer"
      ? "#F08030"
      : attacks.type === "Drache"
      ? "#007FFF"
      : attacks.type === "Wasser"
      ? "#6890F0"
      : attacks.type === "Eis"
      ? "#98D8D8"
      : "lightgray"};
  color: black;
  border-radius: 7px;
  box-shadow: ${(attacks) =>
    attacks.type === "Gras"
      ? "0 0.2em #3BAC3B"
      : attacks.type === "Gift"
      ? "0 0.2em #8E35EF"
      : attacks.type === "Feuer"
      ? "0 0.2em #A91B00"
      : attacks.type === "Drache"
      ? "0 0.2em #2D00FF"
      : attacks.type === "Wasser"
      ? "0 0.2em #3366CC"
      : attacks.type === "Eis"
      ? "0 0.2em #66CCCC"
      : "0 0.2em gray"};
  cursor: pointer;

  &:active {
    box-shadow: none;
    position: relative;
    top: 0.2em;
  }
`;

const AttackButtonBack = styled(AttackButton)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

export default AttackMenu;
