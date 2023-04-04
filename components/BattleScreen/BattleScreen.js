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

	// Array für Pokemons
	//----------------------------------------------------------------
	const enemyPokemonArray = [
		{
			name: "Mewtwo",
			level: 75,
			maxHealth: 120,
			currentHealth: 120,
			gifUrl: "/sprites/opponent/hard/mewtwo.gif",
		},
		{
			name: "Gengar",
			level: 80,
			maxHealth: 130,
			currentHealth: 130,
			gifUrl: "/sprites/opponent/hard/gengar.gif",
		},
		{
			name: "Garados",
			level: 85,
			maxHealth: 140,
			currentHealth: 140,
			gifUrl: "/sprites/opponent/hard/gyarados.gif",
		},
	];

	const [enemyPokemonIndex, setEnemyPokemonIndex] = useState(0); // Initialize enemyPokemonIndex state
	const [enemyPokemon, setEnemyPokemon] = useState(
		enemyPokemonArray[enemyPokemonIndex]
	); // Initialize enemyPokemon state

	//----------------------------------------------------------------

	const handleAttack = (damage) => {
		setPlayerAttacking(true);
		const actualDamage = Math.floor(damage * (Math.random() * 0.2 + 0.8));
		setEnemyPokemon((prevPokemon) => {
			const newPokemon = {
				...prevPokemon,
				currentHealth: Math.max(prevPokemon.currentHealth - actualDamage, 0),
			};
			if (newPokemon.currentHealth === 0) {
				setIsEnemyDefeated(true);
				if (enemyPokemonIndex === enemyPokemonArray.length - 1) {
					setVictory(true);
				} else {
					setEnemyPokemonIndex(enemyPokemonIndex + 1);
					setEnemyPokemon(enemyPokemonArray[enemyPokemonIndex + 1]); // Update the enemyPokemon state
				}
			}
			return newPokemon;
		});

		if (enemyPokemon.currentHealth - actualDamage <= 0) {
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
				pokemon={enemyPokemon.name}
				level={enemyPokemon.level}
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
