import { useState, useEffect } from "react";

export function useBattleLogic(selectedPokemon, selectedEnemyPokemon) {
	const [playerHealth, setPlayerHealth] = useState(120);
	const [victory, setVictory] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isEnemyDefeated, setIsEnemyDefeated] = useState(false);
	const [playerAttacking, setPlayerAttacking] = useState(false);
	const [enemyAttacking, setEnemyAttacking] = useState(false);
	const [defeatedEnemyIndexes, setDefeatedEnemyIndexes] = useState([]);

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

		if (newCurrentHealth === 0) {
			setIsEnemyDefeated(true);
			setTimeout(() => {
				setVictory(true);
			}, 1000);
		}

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

	const handleEnemyDefeat = () => {
		setDefeatedEnemyIndexes([
			...defeatedEnemyIndexes,
			selectedEnemyPokemonIndex,
		]);
		setEnemyDefeated(true);
		setEnemyAttacking(false);
		setPlayerAttacking(false);

		// Wählen den nächsten Gegner aus
		if (defeatedEnemyIndexes.length + 1 < enemyTeam.length) {
			let nextEnemyIndex;
			do {
				nextEnemyIndex = Math.floor(Math.random() * enemyTeam.length);
			} while (defeatedEnemyIndexes.includes(nextEnemyIndex));

			setSelectedEnemyPokemonIndex(nextEnemyIndex);
		} else {
			setVictory(true);
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
