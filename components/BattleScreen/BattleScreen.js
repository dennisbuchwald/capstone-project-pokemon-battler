import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useBattleLogic } from "../../hooks/useBattleLogic";
import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./PlayerState/PlayerState";
import EnemyPokemon from "./Pokemon/EnemyPokemon";
import EnemyState from "./EnemyState/EnemyState";
import Menu from "./Menu/Menu";
import VictoryMessage from "./Message/VictoryMessage";
import LoserMessage from "./Message/LoserMessage";
import SoundEffect from "./SoundEffect/SoundEffect";
import PokemonSelection from "../PokemonSelection/PokemonSelection";
import OpponentSelection from "../OpponentSelection/OpponentSelection";
import AttackMessage from "./Menu/AttackMessage";

function getBackgroundImageUrl(index) {
  const images = [
    "/background/background0.png",
    "/background/background1.png",
    "/background/background2.png",
  ];

  return images[index] || images[0];
}

function BattleMusic({ enemyIndex }) {
  const [playSound, stopSound] = SoundEffect();

  useEffect(() => {
    const battleMusic = ["battleMusic0", "battleMusic1", "battleMusic2"][
      enemyIndex
    ];
    playSound(battleMusic);

    return () => {
      stopSound(battleMusic);
    };
  }, [playSound, stopSound, enemyIndex]);

  return null;
}

function TitleMusic() {
  const [playSound, stopSound] = SoundEffect();

  useEffect(() => {
    playSound("titleMusic");

    return () => {
      stopSound("titleMusic");
    };
  }, [playSound, stopSound]);

  return null;
}

function Battle({
  selectedPokemon,
  selectedEnemyPokemon,
  selectedEnemyPokemons,
  setSelectedEnemyPokemon,
  resetSelection,
  selectedEnemyIndex,
}) {
  const {
    playerHealth,
    victory,
    isDisabled,
    isEnemyDefeated,
    playerAttacking,
    enemyAttacking,
    handleAttack,
    handlePlayerDamage,
    handlePotionUse,
    attackMessage,
    enemyAttackMessage,
  } = useBattleLogic(
    selectedPokemon,
    selectedEnemyPokemon,
    selectedEnemyPokemons,
    setSelectedEnemyPokemon
  );

  const enemyPokemon = selectedEnemyPokemon;

  if (playerHealth <= 0) {
    return <LoserMessage resetSelection={resetSelection} />;
  } else if (victory) {
    return <VictoryMessage resetSelection={resetSelection} />;
  }

  return (
    <ScreenContainer selectedEnemyIndex={selectedEnemyIndex}>
      <BattleMusic enemyIndex={selectedEnemyIndex} />

      <PlayerState
        currentHealth={playerHealth}
        selectedPokemon={selectedPokemon}
      />
      <PlayerPokemon
        attacking={playerAttacking}
        isDamaged={enemyAttacking}
        selectedPokemon={selectedPokemon}
      />
      <EnemyPokemon
        attacking={enemyAttacking}
        wasAttacked={playerAttacking}
        selectedPokemon={selectedEnemyPokemon}
      />
      <EnemyState
        currentHealth={enemyPokemon.currentHealth}
        maxHealth={enemyPokemon.maxHealth}
        pokemon={enemyPokemon.name}
        level={enemyPokemon.level}
      />
      <Menu
        onAttack={handleAttack}
        disabled={isDisabled || isEnemyDefeated}
        attacks={selectedPokemon.attacks}
        name={selectedPokemon.name}
        onPotionUse={handlePotionUse}
        onResetSelection={resetSelection}
      />
      {attackMessage && (
        <AttackMessage
          name={attackMessage.name}
          attack={attackMessage.attack}
        />
      )}
      {enemyAttackMessage && (
        <AttackMessage
          name={enemyAttackMessage.name}
          attack={enemyAttackMessage.attack}
        />
      )}
    </ScreenContainer>
  );
}

export default function BattleScreen() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedEnemyPokemon, setSelectedEnemyPokemon] = useState(null);
  const [selectedEnemyPokemons, setSelectedEnemyPokemons] = useState(null);
  const [selectedEnemyIndex, setSelectedEnemyIndex] = useState(null);

  const resetSelection = () => {
    setSelectedPokemon(null);
    setSelectedEnemyPokemon(null);
  };

  const handlePokemonSelection = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleEnemySelection = (enemyPokemons, index) => {
    setSelectedEnemyPokemons(enemyPokemons);
    setSelectedEnemyPokemon(enemyPokemons[0]);
    setSelectedEnemyIndex(index);
  };

  if (!selectedPokemon) {
    return (
      <>
        <TitleMusic />
        <PokemonSelection onSelect={handlePokemonSelection} />
      </>
    );
  }

  if (!selectedEnemyPokemon || !selectedEnemyPokemons) {
    return (
      <>
        <TitleMusic />
        <OpponentSelection
          onSelect={(enemyPokemons, index) =>
            handleEnemySelection(enemyPokemons, index)
          }
        />
      </>
    );
  }

  return (
    <>
      <Battle
        selectedPokemon={selectedPokemon}
        selectedEnemyPokemon={selectedEnemyPokemon}
        selectedEnemyPokemons={selectedEnemyPokemons}
        setSelectedEnemyPokemon={setSelectedEnemyPokemon}
        resetSelection={resetSelection}
        selectedEnemyIndex={selectedEnemyIndex}
      />
    </>
  );
}

const ScreenContainer = styled.main`
  background-image: ${({ selectedEnemyIndex }) =>
    `url(${getBackgroundImageUrl(selectedEnemyIndex)})`};
  background-size: 426px 200px;
  display: block;
  font-size: 10px;
  max-height: 266px;
  max-width: 388px;
  position: absolute;
  left: 49.8%;
  top: 51.8%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;
