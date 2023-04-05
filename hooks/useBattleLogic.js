import { useState, useEffect } from "react";
import { enemyPokemonArray } from "../components/BattleScreen/Pokemon/EnemyPokemon";

export function useBattleLogic() {
	const [enemyHealth, setEnemyHealth] = useState(120);
	const [playerHealth, setPlayerHealth] = useState(120);
	const [victory, setVictory] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isEnemyDefeated, setIsEnemyDefeated] = useState(false);
	const [playerAttacking, setPlayerAttacking] = useState(false);
	const [enemyAttacking, setEnemyAttacking] = useState(false);

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

	const handleAttack = (damage) => {
		setPlayerAttacking(true);
		const actualDamage = Math.floor(damage * (Math.random() * 0.2 + 0.8));
		setEnemyHealth(Math.max(enemyHealth - actualDamage, 0));

		if (enemyHealth - actualDamage <= 0) {
			setIsEnemyDefeated(true);
			setVictory(true);
			return;
		}

		setIsDisabled(true);
		setTimeout(() => {
			if (isEnemyDefeated) {
				setIsDisabled(false);
				return;
			}

			const damageTaken = Math.floor(Math.random() * (50 - 1 + 1) + 1);
			setPlayerHealth(Math.max(playerHealth - damageTaken, 0));
			setIsDisabled(false);
			setEnemyAttacking(true);

			if (playerHealth - damageTaken <= 0) {
				setVictory(false);
			}
		}, 1000);
	};

	return {
		enemyHealth,
		playerHealth,
		victory,
		isDisabled,
		isEnemyDefeated,
		playerAttacking,
		enemyAttacking,
		handleAttack,
	};
}
