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

function BattleMusic() {
  const [playSound, stopSound] = SoundEffect();

  useEffect(() => {
    playSound("battleMusic");

    return () => {
      stopSound("battleMusic");
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
    <ScreenContainer>
      <BattleMusic />

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

  const resetSelection = () => {
    setSelectedPokemon(null);
    setSelectedEnemyPokemon(null);
  };

  const handlePokemonSelection = (pokemon) => {
    setSelectedPokemon(pokemon);
  };
  const handleEnemySelection = (enemyPokemons) => {
    setSelectedEnemyPokemons(enemyPokemons);
    setSelectedEnemyPokemon(enemyPokemons[0]);
  };

  if (!selectedPokemon) {
    return (
      <>
        <PokemonSelection onSelect={handlePokemonSelection} />
      </>
    );
  }

  if (!selectedEnemyPokemon || !selectedEnemyPokemons) {
    return (
      <>
        <OpponentSelection onSelect={handleEnemySelection} />
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
      />
    </>
  );
}

const ScreenContainer = styled.main`
  background-image: url("/background/background-middle.png");
  background-size: 426px 200px;
  display: block;
  font-size: 10px;
  max-height: 325px;
  max-width: 426px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;
