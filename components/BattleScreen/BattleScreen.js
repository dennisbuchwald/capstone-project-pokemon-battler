import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useBattleLogic, resetEnemyHealth } from "../../hooks/useBattleLogic";
import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./Statusbar/PlayerState";
import EnemyPokemon from "./Pokemon/EnemyPokemon";
import EnemyState from "./Statusbar/EnemyState";
import Menu from "./Menu/Menu";
import VictoryMessage from "./Message/VictoryMessage";
import LoserMessage from "./Message/LoserMessage";
import SoundEffect from "./SoundEffect/SoundEffect";
import PokemonSelection from "../PokemonSelection/PokemonSelection";
import OpponentSelection from "../OpponentSelection/OpponentSelection";
import AttackMessage from "./Menu/AttackMessage";

// Liste der Hintergrundbild-URLs
const backgroundImageUrls = [
  "/background/background0.png",
  "/background/background1.png",
  "/background/background2.png",
];

// Funktion zum Abrufen der Hintergrundbild-URL anhand des Index
function getBackgroundImageUrl(index) {
  return backgroundImageUrls[index] || backgroundImageUrls[0];
}

// Liste der Kampfmusik
const battleMusicList = ["battleMusic0", "battleMusic1", "battleMusic2"];

// BattleMusic-Komponente zum Abspielen der Kampfmusik basierend auf dem enemyIndex
function BattleMusic({ enemyIndex }) {
  const [playSound, stopSound] = SoundEffect();

  useEffect(() => {
    const battleMusic = battleMusicList[enemyIndex];
    playSound(battleMusic);

    return () => {
      stopSound(battleMusic);
    };
  }, [playSound, stopSound, enemyIndex]);

  return null;
}

// Hauptkampfkomponente, die alle relevanten Zustände und Aktionen verwaltet
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
    resetEnemyHealth,
  } = useBattleLogic(
    selectedPokemon,
    selectedEnemyPokemon,
    selectedEnemyPokemons,
    setSelectedEnemyPokemon
  );

  // Überprüfung der Sieg- oder Niederlagebedingungen
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
        currentHealth={selectedEnemyPokemon.currentHealth}
        maxHealth={selectedEnemyPokemon.maxHealth}
        pokemon={selectedEnemyPokemon.name}
        level={selectedEnemyPokemon.level}
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

// Haupt-BattleScreen-Komponente, die den ausgewählten Spieler und Gegner verwaltet
export default function BattleScreen({ setInBattle }) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedEnemyPokemons, setSelectedEnemyPokemons] = useState([]);
  const [selectedEnemyPokemon, setSelectedEnemyPokemon] = useState(null);
  const [selectedEnemyIndex, setSelectedEnemyIndex] = useState(0);

  const resetSelection = () => {
    setSelectedPokemon(null);
    resetEnemyHealth(selectedEnemyPokemons);
    setSelectedEnemyPokemons([]);
    setSelectedEnemyPokemon(null);
    setInBattle(false);
  };

  // Auswahl des Spieler-Pokémons
  if (!selectedPokemon) {
    return (
      <ScreenContainer>
        <PokemonSelection
          onSelect={(pokemon) => {
            setSelectedPokemon(pokemon);
          }}
        />
      </ScreenContainer>
    );
    // Auswahl des Gegner-Pokémons
  } else if (!selectedEnemyPokemon) {
    return (
      <ScreenContainer>
        <OpponentSelection
          onSelect={(enemyPokemons, index) => {
            setSelectedEnemyPokemons(enemyPokemons);
            setSelectedEnemyPokemon(enemyPokemons[0]);
            setSelectedEnemyIndex(index);
            setInBattle(true); // Setze inBattle auf true, wenn ein Gegner ausgewählt wird
          }}
        />
      </ScreenContainer>
    );
  }

  // Rendering der Battle-Komponente
  return (
    <Battle
      selectedPokemon={selectedPokemon}
      selectedEnemyPokemon={selectedEnemyPokemon}
      selectedEnemyPokemons={selectedEnemyPokemons}
      setSelectedEnemyPokemon={setSelectedEnemyPokemon}
      resetSelection={resetSelection}
      selectedEnemyIndex={selectedEnemyIndex}
    />
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
