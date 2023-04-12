import styled from "styled-components";

export default function EnemyState({
	currentHealth,
	maxHealth,
	pokemon,
	level,
}) {
	const healthPercent = Math.floor((currentHealth / maxHealth) * 100);

	console.log("Pokemon name:", pokemon);
	return (
		<EnemyStateSection>
			<EnemyPokemonName>{pokemon}</EnemyPokemonName>
			<EnemyPokemonLevelTitle>Lv.</EnemyPokemonLevelTitle>
			<EnemyPokemonLevel>{level}</EnemyPokemonLevel>
			<EnemyPokemonHealthBar value={healthPercent} max="100" />
		</EnemyStateSection>
	);
}

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

const EnemyPokemonHealthBar = styled.progress`
	position: absolute;
	height: 6px;
	width: 96px;
	left: 78px;
	top: 34px;
	z-index: 1;
	appearance: none;

	&::-webkit-progress-bar {
		border-radius: 2.5px;
	}

	&::-webkit-progress-value {
		background: linear-gradient(
			180deg,
			rgba(42, 106, 37, 1) 0%,
			rgba(37, 183, 40, 1) 39%
		);
		border-radius: 2.5px;
		transition: all 0.1s linear;
	}
`;
