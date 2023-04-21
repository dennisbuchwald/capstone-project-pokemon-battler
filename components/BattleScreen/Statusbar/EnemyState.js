import styled from "styled-components";

export default function EnemyState({
  currentHealth,
  maxHealth,
  pokemon,
  level,
}) {
  const healthPercent = Math.floor((currentHealth / maxHealth) * 100);

  return (
    <>
      <BackgroundImageContainer />

      <EnemyStateSection>
        <EnemyPokemonName>{pokemon}</EnemyPokemonName>
        <EnemyPokemonLevelTitle>Lv.</EnemyPokemonLevelTitle>
        <EnemyPokemonLevel>{level}</EnemyPokemonLevel>
        <EnemyPokemonHealthBar value={healthPercent} max="100" />
      </EnemyStateSection>
    </>
  );
}

const BackgroundImageContainer = styled.section`
  position: absolute;
  top: 20px;
  left: 10px;
  background-image: url("/sprites/statusbar-opponent.png");
  width: 250px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`;

const EnemyStateSection = styled.section`
  color: white;
  position: absolute;
  top: 22px;
  left: 20px;
  // background-image: url("/sprites/statusbar-opponent3.png");
  width: 150px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`;

const EnemyPokemonName = styled.p`
  position: absolute;
  top: 0px;
  left: 4px;
  z-index: 1;
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

const EnemyPokemonLevel = styled.span`
  position: absolute;
  top: 0px;
  right: 10px;
  z-index: 10;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const EnemyPokemonLevelTitle = styled.span`
  position: absolute;
  top: 0px;
  right: 30px;
  z-index: 10;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const EnemyPokemonHealthBar = styled.progress`
  position: absolute;
  height: 6px;
  width: 96px;
  left: 45px;
  top: 24px;
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
