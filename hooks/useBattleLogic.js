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

		setTimeout(() => {
			if (newCurrentHealth === 0) {
				const newIndex = handleEnemyDefeat(selectedEnemyPokemons);
				if (newIndex !== -1) {
					setTimeout(() => {
						setSelectedEnemyPokemon(selectedEnemyPokemons[newIndex]);
						setIsEnemyDefeated(false);
					}, 1000);
				}
			}
		}, 500);

		if (newCurrentHealth <= 0) {
			return;
		}
		setIsDisabled(true);
		setTimeout(() => {
			setEnemyAttacking(true);
			if (isEnemyDefeated) {
				setIsDisabled(false);
				return;
			}

			setTimeout(() => {
				const damageTaken = Math.floor(Math.random() * (50 - 1 + 1) + 1);
				handlePlayerDamage(damageTaken);

				if (playerHealth - damageTaken <= 0) {
					setIsDisabled(false);
					setTimeout(() => {
						setVictory(false);
					}, 1000);
				} else {
					setIsDisabled(false);
				}
			}, 150);

			setTimeout(() => {
				setEnemyAttacking(false);
			}, 1500);
		}, 1000);
	};

	const handleEnemyDefeat = (enemyPokemons) => {
		setIsEnemyDefeated(true);
		setEnemyAttacking(false);
		setPlayerAttacking(false);

		if (selectedEnemyIndex + 1 < enemyPokemons.length) {
			setSelectedEnemyIndex(selectedEnemyIndex + 1);
			return selectedEnemyIndex + 1;
		} else {
			setVictory(true);
			return -1;
		}
	};

	const handlePotionUse = (healthToRestore) => {
		setPlayerHealth((prevHealth) =>
			Math.min(prevHealth + healthToRestore, 120)
		);
		setIsDisabled(true);
		setTimeout(() => {
			setIsDisabled(false);
		}, 1000);

		setTimeout(() => {
			setEnemyAttacking(true);
			setTimeout(() => {
				const damageTaken = Math.floor(Math.random() * (50 - 1 + 1) + 1);
				handlePlayerDamage(damageTaken);

				if (playerHealth - damageTaken <= 0) {
					setIsDisabled(false);
					setTimeout(() => {
						setVictory(false);
					}, 1000);
				} else {
					setIsDisabled(false);
				}

				setTimeout(() => {
					setEnemyAttacking(false);
				}, 1500);
			}, 150);
		}, 1000);
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
		handlePotionUse,
	};
}
