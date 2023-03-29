import styled from "styled-components";
import { useState } from "react";

const EnemyStateSection = styled.section`
	position: absolute;
	top: 20px;
	left: 0px;
	background-image: url("/sprites/statusbar-opponent3.png");
	width: 200px;
	height: 68px;
	background-repeat: no-repeat;
	background-size: contain;
	z-index: 1;
`;

const EnemyPokemonName = styled.p`
	position: absolute;
	top: 5px;
	left: 15px;
	z-index: 1;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
	text-transform: uppercase;
	margin: 0;
	padding: 0;
`;

const EnemyPokemonLevel = styled.span`
	position: absolute;
	top: 5px;
	right: 29px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
	margin: 0;
	padding: 0;
`;

const EnemyPokemonLevelTitle = styled.span`
	position: absolute;
	top: 5px;
	right: 50px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
	margin: 0;
	padding: 0;
`;

const EnemyPokemonHealthBarContainer = styled.progress`
	position: absolute;
	height: 6px;
	width: 96px;
	left: 78px;
	top: 34px;
	z-index: 10;
	background: rgb(42, 106, 37);
	background: linear-gradient(
		180deg,
		rgba(42, 106, 37, 1) 0%,
		rgba(37, 183, 40, 1) 39%
	);
	transition: all 0.4s linear;
	border-radius: 2.5px;
	appearance: none;
`;

const EnemyPokemonHealthBar = styled.span`
	position: absolute;
	height: 6px;
	width: ${(props) => props.percent}%;
	left: 0;
	top: 0;
	background-color: #25b527;
	transition: all 0.4s linear;
	border-radius: 2.5px;
`;

export default function EnemyState() {
	const [currentHealth, setCurrentHealth] = useState(120);
	const maxHealth = 120;
	const healthPercent = Math.floor((currentHealth / maxHealth) * 100);

	// Funktion für das updaten der Healthbar
	const handleHealthUpdate = (newHealth) => {
		setCurrentHealth(newHealth);
	};

	return (
		<EnemyStateSection>
			<EnemyPokemonName>Mewtwo</EnemyPokemonName>
			<EnemyPokemonLevelTitle>Lv.</EnemyPokemonLevelTitle>
			<EnemyPokemonLevel>75</EnemyPokemonLevel>
			<EnemyPokemonHealthBarContainer value={healthPercent} max="100">
				<EnemyPokemonHealthBar percent={healthPercent} />
			</EnemyPokemonHealthBarContainer>
		</EnemyStateSection>
	);
}
