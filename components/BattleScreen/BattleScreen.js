import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useBattleLogic } from "../../hooks/useBattleLogic";

import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./PlayerState/PlayerState";
import EnemyPokemon, { enemyPokemonArray } from "./Pokemon/EnemyPokemon";
import EnemyState from "./EnemyState/EnemyState";
import Menu from "./Menu/Menu";
import VictoryMessage from "./Message/VictoryMessage";
import LoserMessage from "./Message/LoserMessage";

export default function BattleScreen() {
	const {
		playerHealth,
		victory,
		isDisabled,
		isEnemyDefeated,
		playerAttacking,
		enemyAttacking,
		selectedEnemyPokemonIndex,
		handleAttack,
	} = useBattleLogic();

	const enemyPokemon = enemyPokemonArray[selectedEnemyPokemonIndex];

	if (playerHealth <= 0) {
		return <LoserMessage />;
	} else if (victory) {
		return <VictoryMessage />;
	}

	return (
		<ScreenContainer>
			<PlayerState currentHealth={playerHealth} />
			<PlayerPokemon attacking={playerAttacking} />
			<EnemyPokemon
				attacking={enemyAttacking}
				selectedPokemonIndex={selectedEnemyPokemonIndex}
			/>
			<EnemyState
				currentHealth={enemyPokemon.currentHealth}
				maxHealth={enemyPokemon.maxHealth}
				pokemon={enemyPokemon.name}
				level={enemyPokemon.level}
			/>{" "}
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
	width: 100%;
	height: 100%;
`;
