import styled from "styled-components";
import React, { useState, useEffect } from "react";
import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./PlayerState/PlayerState";
import EnemyPokemon from "./Pokemon/EnemyPokemon";
import EnemyState from "./EnemyState/EnemyState";
import Menu from "./Menu/Menu";
import VictoryMessage from "./Message/VictoryMessage";
import LoserMessage from "./Message/LoserMessage";

export default function BattleScreen() {
	const [enemyHealth, setEnemyHealth] = useState(120);
	const [playerHealth, setPlayerHealth] = useState(120);
	const [victory, setVictory] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isEnemyDefeated, setIsEnemyDefeated] = useState(false);
	const [playerAttacking, setPlayerAttacking] = useState(false);
	const [enemyAttacking, setEnemyAttacking] = useState(false);

	console.log(enemyHealth);

	const handleAttack = (damage) => {
		// Ich greife an
		setPlayerAttacking(true);
		const actualDamage = Math.floor(damage * (Math.random() * 0.2 + 0.8)); // zufälliger Wert zwischen 80% und 100% des Schadens
		setEnemyHealth(Math.max(enemyHealth - actualDamage, 0)); // Schaden wird maximal auf die aktuelle Gesundheit des Gegners angewendet

		if (enemyHealth - actualDamage <= 0) {
			setIsEnemyDefeated(true);
			setVictory(true);
			return;
		}

		// Gegner greift zurück an
		setIsDisabled(true); // Button wird deaktiviert
		setTimeout(() => {
			if (isEnemyDefeated) {
				setIsDisabled(false); // Button wird wieder aktiviert
				return;
			}

			const damageTaken = Math.floor(Math.random() * (50 - 1 + 1) + 1);
			setPlayerHealth(Math.max(playerHealth - damageTaken, 0)); // Schaden wird maximal auf die aktuelle Gesundheit des Spielers angewendet
			setIsDisabled(false); // Button wird wieder aktiviert
			setEnemyAttacking(true);

			if (playerHealth - damageTaken <= 0) {
				setVictory(false);
			}
			console.log("Damage taken:", damageTaken);
		}, 1000);
		console.log("Damage dealt:", actualDamage);
	};

	useEffect(() => {
		if (playerAttacking) {
			setTimeout(() => {
				setPlayerAttacking(false);
			}, 500);
		}
	}, [playerAttacking]);

	useEffect(() => {
		if (enemyAttacking) {
			setTimeout(() => {
				setEnemyAttacking(false);
			}, 500);
		}
	}, [enemyAttacking]);

	if (playerHealth <= 0) {
		return <LoserMessage />;
	} else if (victory) {
		return <VictoryMessage />;
	}

	return (
		<ScreenContainer>
			<PlayerState currentHealth={playerHealth} />
			<PlayerPokemon attacking={playerAttacking} />

			<EnemyPokemon attacking={enemyAttacking} />
			<EnemyState currentHealth={enemyHealth} />
			<Menu onAttack={handleAttack} disabled={isDisabled || isEnemyDefeated} />
		</ScreenContainer>
	);
}

const ScreenContainer = styled.main`
	background-image: url("/background/background-middle.png");
	background-size: 426px 250px;
	display: block;
	font-size: 10px;
	max-height: 325px;
	max-width: 426px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border: solid red;
	width: 100%;
	height: 100%;
`;
