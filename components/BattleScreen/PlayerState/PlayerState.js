import styled from "styled-components";

export default function PlayerState({ currentHealth, selectedPokemon }) {
  const maxHealth = 180;
  const healthPercent = Math.floor((currentHealth / maxHealth) * 100);

  return (
    <>
      <BackgroundImageContainer />
      <PlayerStateSection>
        <PokemonName>{selectedPokemon.name}</PokemonName>
        <PokemonLevelTitel>Lv.</PokemonLevelTitel>
        <PokemonLevel>{selectedPokemon.level}</PokemonLevel>
        <PokemonHealth>{currentHealth}</PokemonHealth>
        <PokemonHealthBar value={healthPercent} max="100"></PokemonHealthBar>
        <PokemonSlashHealth>/</PokemonSlashHealth>
        <PokemonMaxHealth>{selectedPokemon.maxHealth}</PokemonMaxHealth>
      </PlayerStateSection>
    </>
  );
}

const BackgroundImageContainer = styled.section`
  position: absolute;
  top: 145.5px;
  right: -22%;
  background-image: url("/sprites/statusbar-player-mod6.png");
  width: 250px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`;

const PlayerStateSection = styled.section`
  color: white;
  position: absolute;
  top: 144px;
  right: -10%;
  width: 250px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`;

const PokemonName = styled.p`
  position: absolute;
  top: 1px;
  left: 65px;
  z-index: 1;
  // text-shadow: 1px 1px 0px #b7b7b7;
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

const PokemonLevel = styled.span`
  position: absolute;
  top: 1px;
  right: 65px;
  z-index: 10;
  // text-shadow: 1px 1px 0px #b7b7b7;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const PokemonLevelTitel = styled.span`
  position: absolute;
  top: 1px;
  right: 85px;
  z-index: 10;
  // text-shadow: 1px 1px 0px #b7b7b7;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const PokemonHealth = styled.span`
  position: absolute;
  top: 30px;
  right: 100px;
  z-index: 11;
  // text-shadow: 1px 1px 0px #b7b7b7;
  font-size: 15px;
  margin: 0;
  padding: 0;
`;

const PokemonSlashHealth = styled.span`
  position: absolute;
  top: 30px;
  right: 90px;
  z-index: 1;
  // text-shadow: 1px 1px 0px #b7b7b7;
  font-size: 15px;
  margin: 0;
  padding: 0;
`;

const PokemonMaxHealth = styled.span`
  position: absolute;
  top: 30px;
  right: 70px;
  z-index: 1;
  // text-shadow: 1px b7b7b7;
  font-size: 15px;
  margin: 0;
  padding: 0;
`;

const PokemonHealthBar = styled.progress`
  position: absolute;
  height: 6px;
  width: 88px;
  left: 100px;
  top: 23px;
  z-index: 1;
  appearance: none;
  &::-webkit-progress-bar {
    border-radius: 2.5px;
  }
  &::-webkit-progress-value {
    background: linear-gradient(
      180deg,
      rgba(42, 106, 37, 1) 0%,
      rgba(37, 183, 40, 1) 39%
    );
    border-radius: 2.5px;
    transition: all 0.1s linear;
  }
  &::-moz-progress-bar {
    background: linear-gradient(
      180deg,
      rgba(42, 106, 37, 1) 0%,
      rgba(37, 183, 40, 1) 39%
    );
    border-radius: 2.5px;
    transition: all 0.1s linear;
  }
`;
