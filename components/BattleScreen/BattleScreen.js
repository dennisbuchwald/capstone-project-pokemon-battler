import styled from "styled-components";

import React, { useState } from "react";
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

	const handleAttack = () => {
		// Ich greife an
		const damageDealt = Math.floor(Math.random() * (50 - 1 + 1) + 1);
		setEnemyHealth(enemyHealth - damageDealt);

		if (enemyHealth - damageDealt <= 0) {
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
			setPlayerHealth(playerHealth - damageTaken);
			setIsDisabled(false); // Button wird wieder aktiviert

			if (playerHealth - damageTaken <= 0) {
				setVictory(false);
			}
		}, 1000);
	};

	if (playerHealth <= 0) {
		return <LoserMessage />;
	} else if (victory) {
		return <VictoryMessage />;
	}

	return (
		<ScreenContainer>
			<PlayerState currentHealth={playerHealth} />
			<PlayerPokemon />
			<EnemyPokemon />
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
