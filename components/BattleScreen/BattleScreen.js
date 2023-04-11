import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useBattleLogic } from "../../hooks/useBattleLogic";
import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./PlayerState/PlayerState";
import EnemyPokemon, { enemyPokemonArray } from "./Pokemon/EnemyPokemon";
import EnemyState from "./EnemyState/EnemyState";
import Menu from "./Menu/Menu";
import VictoryMessage from "./Message/VictoryMessage";
import LoserMessage from "./Message/LoserMessage";
import SoundEffect from "./SoundEffect/SoundEffect";
import PokemonSelection from "../PokemonSelection/PokemonSelection";

export default function BattleScreen() {
	const [playSound] = SoundEffect();

	//________________________________________________________________

	const [selectedPokemon, setSelectedPokemon] = useState(null);

	const handlePokemonSelection = (pokemon) => {
		setSelectedPokemon(pokemon);
	};

	if (!selectedPokemon) {
		return <PokemonSelection onSelect={handlePokemonSelection} />;
	}

	//________________________________________________________________

	useEffect(() => {
		playSound("backgroundMusic");
	}, [playSound]);

	const {
		playerHealth,
		victory,
		isDisabled,
		isEnemyDefeated,
		playerAttacking,
		enemyAttacking,
		selectedEnemyPokemonIndex,
		handleAttack,
		handlePlayerDamage,
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
			<PlayerPokemon attacking={playerAttacking} isDamaged={enemyAttacking} />
			<EnemyPokemon
				attacking={enemyAttacking}
				wasAttacked={playerAttacking}
				selectedPokemonIndex={selectedEnemyPokemonIndex}
			/>
			<EnemyState
				currentHealth={enemyPokemon.currentHealth}
				maxHealth={enemyPokemon.maxHealth}
				pokemon={enemyPokemon.name}
				level={enemyPokemon.level}
			/>
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
