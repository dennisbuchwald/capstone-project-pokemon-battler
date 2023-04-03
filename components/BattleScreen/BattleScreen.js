import styled from "styled-components";

import React, { useState } from "react";
import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./PlayerState/PlayerState";
import EnemyPokemon from "./Pokemon/EnemyPokemon";
import EnemyState from "./EnemyState/EnemyState";
import Menu from "./Menu/Menu";
import VictoryMessage from "./VictoryMessage/VictoryMessage";

export default function BattleScreen() {
	const [enemyHealth, setEnemyHealth] = useState(120);
	const [playerHealth, setPlayerHealth] = useState(120);
	const [victory, setVictory] = useState(false);

	const handleAttack = () => {
		// Ich greife an
		const damageDealt = Math.floor(Math.random() * (20 - 10 + 1) + 10);
		setEnemyHealth(enemyHealth - damageDealt);

		// Gegner greift zurück an
		setTimeout(() => {
			const damageTaken = Math.floor(Math.random() * (20 - 10 + 1) + 10);
			setPlayerHealth(playerHealth - damageTaken);

			if (playerHealth - damageTaken <= 0) {
				setVictory(false);
			} else if (enemyHealth - damageDealt <= 0) {
				setVictory(true);
			}
		}, 1000);
	};

	return (
		<>
			{victory ? (
				<VictoryMessage />
			) : (
				<ScreenContainer>
					<PlayerState currentHealth={playerHealth} />
					<PlayerPokemon />
					<EnemyPokemon />
					<EnemyState currentHealth={enemyHealth} />
					<Menu onAttack={handleAttack} />
				</ScreenContainer>
			)}
		</>
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
