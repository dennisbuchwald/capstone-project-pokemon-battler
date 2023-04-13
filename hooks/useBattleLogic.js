import { useState, useEffect } from "react";
import useAttackedSound from "../components/BattleScreen/SoundEffect/useAttackedSound";

export function useBattleLogic(
  selectedPokemon,
  selectedEnemyPokemon,
  selectedEnemyPokemons,
  setSelectedEnemyPokemon
) {
  const [playerHealth, setPlayerHealth] = useState(120);
  const [victory, setVictory] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isEnemyDefeated, setIsEnemyDefeated] = useState(false);
  const [playerAttacking, setPlayerAttacking] = useState(false);
  const [enemyAttacking, setEnemyAttacking] = useState(false);
  const [selectedEnemyIndex, setSelectedEnemyIndex] = useState(0);

  const [playSound] = useAttackedSound();

  const handlePlayerDamage = (damage) => {
    setPlayerHealth((prevHealth) => prevHealth - damage);
  };

  useEffect(() => {
    if (playerAttacking) {
      setTimeout(() => {
        setPlayerAttacking(false);
      }, 500);
    }

    if (enemyAttacking) {
      setTimeout(() => {
        setEnemyAttacking(false);
      }, 500);
    }
  }, [playerAttacking, enemyAttacking]);

  const handleAttack = (attackIndex) => {
    const attack = selectedPokemon.attacks[attackIndex];

    setPlayerAttacking(true);
    const actualDamage = Math.floor(
      attack.damage * (Math.random() * 0.2 + 0.8)
    );
    const newCurrentHealth = Math.max(
      selectedEnemyPokemon.currentHealth - actualDamage,
      0
    );
    selectedEnemyPokemon.currentHealth = newCurrentHealth;

    playSound("attackedSound");

    // Verzögere die Überprüfung des besiegten Gegners, um die Animation abzuschließen
    setTimeout(() => {
      if (newCurrentHealth === 0) {
        const newIndex = handleEnemyDefeat(selectedEnemyPokemons);
        if (newIndex !== -1) {
          setTimeout(() => {
            setSelectedEnemyPokemon(selectedEnemyPokemons[newIndex]);
            setIsEnemyDefeated(false); // Setze isEnemyDefeated auf false zurück
          }, 1000); // Timeout von 1000 ms hinzu
        }
      }
    }, 500); // Füge eine Verzögerung von 500 ms hinzu, um die Animation abzuschließen

    if (newCurrentHealth <= 0) {
      return;
    }
    setIsDisabled(true);
    setTimeout(() => {
      if (isEnemyDefeated) {
        setIsDisabled(false);
        return;
      }

      const damageTaken = Math.floor(Math.random() * (50 - 1 + 1) + 1);
      handlePlayerDamage(damageTaken);
      setIsDisabled(false);
      setEnemyAttacking(true);

      if (playerHealth - damageTaken <= 0) {
        setVictory(false);
      }
    }, 1000);
  };

  const handleEnemyDefeat = (enemyPokemons) => {
    setIsEnemyDefeated(true);
    setEnemyAttacking(false);
    setPlayerAttacking(false);

    if (selectedEnemyIndex + 1 < enemyPokemons.length) {
      setSelectedEnemyIndex(selectedEnemyIndex + 1);
      return selectedEnemyIndex + 1; // Rückgabe des neuen Index
    } else {
      setVictory(true);
      return -1; // Rückgabe von -1, wenn alle feindlichen Pokémon besiegt sind
    }
  };

  return {
    playerHealth,
    victory,
    isDisabled,
    isEnemyDefeated,
    playerAttacking,
    enemyAttacking,
    handleAttack,
    handlePlayerDamage,
    handleEnemyDefeat,
  };
}
