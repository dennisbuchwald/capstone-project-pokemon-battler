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
import OpponentSelection from "../OpponentSelection/OpponentSelection";

function BackgroundMusic() {
	const [playSound] = SoundEffect();

	useEffect(() => {
		playSound("backgroundMusic");
	}, [playSound]);

	return null;
}

function Battle({ selectedPokemon, selectedEnemyPokemons }) {
	const [isPokemonFainted, setIsPokemonFainted] = useState(false);
	const [isVictory, setIsVictory] = useState(false);
	const [isMenuDisabled, setIsMenuDisabled] = useState(false);
	const [isEnemyDefeated, setIsEnemyDefeated] = useState(false);
	const [isPlayerAttacking, setIsPlayerAttacking] = useState(false);
	const [isEnemyAttacking, setIsEnemyAttacking] = useState(false);
	const [selectedEnemyPokemonIndex, setSelectedEnemyPokemonIndex] = useState(0);

	const playerPokemon = selectedPokemon;
	const enemyPokemon = enemyPokemonArray[selectedEnemyPokemonIndex];

	const handleAttack = () => {
		setIsMenuDisabled(true);

		setIsPlayerAttacking(true);
		setTimeout(() => {
			setIsPlayerAttacking(false);

			const damage = playerPokemon.attacks[0].power;
			const newEnemyHealth = enemyPokemon.currentHealth - damage;
			const isEnemyFainted = newEnemyHealth <= 0;

			if (isEnemyFainted) {
				setIsEnemyDefeated(true);
				setIsVictory(true);
				setIsMenuDisabled(true);
				return;
			}

			enemyPokemon.currentHealth = newEnemyHealth;
			setSelectedEnemyPokemonIndex((prevIndex) => prevIndex + 1);

			setTimeout(() => {
				setIsEnemyAttacking(true);

				setTimeout(() => {
					setIsEnemyAttacking(false);

					const enemyAttack = enemyPokemon.attacks[0];
					const damage = enemyAttack.power;
					const newPlayerHealth = playerPokemon.currentHealth - damage;
					const isPlayerFainted = newPlayerHealth <= 0;

					if (isPlayerFainted) {
						setIsPokemonFainted(true);
						setIsMenuDisabled(true);
						return;
					}

					playerPokemon.currentHealth = newPlayerHealth;
					setIsMenuDisabled(false);
				}, 1000);
			}, 1000);
		}, 1000);
	};

	if (isVictory) {
		return <VictoryMessage />;
	}

	if (isPokemonFainted) {
		return <LoserMessage />;
	}

	return (
		<ScreenContainer>
			<PlayerState
				currentHealth={playerPokemon.currentHealth}
				selectedPokemon={playerPokemon}
			/>
			<PlayerPokemon
				attacking={isPlayerAttacking}
				isDamaged={isEnemyAttacking}
				selectedPokemon={playerPokemon}
			/>
			<EnemyPokemon
				attacking={isEnemyAttacking}
				wasAttacked={isPlayerAttacking}
				selectedPokemonIndex={selectedEnemyPokemonIndex}
			/>
			<EnemyState
				currentHealth={enemyPokemon.currentHealth}
				maxHealth={enemyPokemon.maxHealth}
				pokemon={enemyPokemon.name}
				level={enemyPokemon.level}
			/>
			<Menu
				onAttack={handleAttack}
				disabled={isMenuDisabled}
				attacks={playerPokemon.attacks}
			/>
		</ScreenContainer>
	);
}

export default function BattleScreen() {
	const [selectedPokemon, setSelectedPokemon] = useState(null);
	const [selectedEnemyPokemons, setSelectedEnemyPokemons] = useState(null);

	const handlePokemonSelection = (pokemon) => {
		setSelectedPokemon(pokemon);
	};

	const handleEnemySelection = (enemy) => {
		setSelectedEnemyPokemons(enemy.pokemons);
	};

	if (!selectedPokemon) {
		return (
			<>
				<BackgroundMusic />
				<PokemonSelection onSelect={handlePokemonSelection} />
			</>
		);
	}

	if (!selectedEnemyPokemons) {
		return (
			<>
				<BackgroundMusic />
				<OpponentSelection onSelect={handleEnemySelection} />
			</>
		);
	}

	return (
		<>
			<BackgroundMusic />
			<OpponentSelection onSelect={handleEnemySelection} />
			<Battle
				selectedPokemon={selectedPokemon}
				selectedEnemyPokemons={selectedEnemyPokemons}
			/>
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
	width: 100%;
	height: 100%;
`;
