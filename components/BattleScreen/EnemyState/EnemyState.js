import styled from "styled-components";

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
	top: -11px;
	left: 15px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
	text-transform: uppercase;
`;

const EnemyPokemonLevel = styled.p`
	position: absolute;
	top: -11px;
	right: 29px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
`;

const EnemyPokemonLevelTitel = styled.p`
	position: absolute;
	top: -11px;
	right: 50px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
`;

const EnemyPokemonHealth = styled.p`
	position: absolute;
	top: 27px;
	right: 25px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 15px;
`;

const EnemyPokemonHealthBar = styled.p`
	position: absolute;
	height: 6px;
	width: 96px;
	left: 78px;
	top: 24px;
	z-index: 10;
	background: rgb(42, 106, 37);
	background: linear-gradient(
		180deg,
		rgba(42, 106, 37, 1) 0%,
		rgba(37, 183, 40, 1) 39%
	);
	transition: all 0.4s linear;
	border-radius: 2.5px;
`;

const EnemyPokemonMaxHealth = styled.p`
	position: absolute;
	top: 27px;
	right: 55px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 15px;
`;

const EnemyPokemonSlashHealth = styled.p`
	position: absolute;
	top: 27px;
	right: 45px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 15px;
`;

export default function EnemyState() {
	return (
		<EnemyStateSection>
			<EnemyPokemonName>Mewtwo</EnemyPokemonName>
			<EnemyPokemonLevelTitel>Lv.</EnemyPokemonLevelTitel>
			<EnemyPokemonLevel>75</EnemyPokemonLevel>
			<EnemyPokemonHealthBar
			// class="enemy--pokemon-health-bar"
			// role="progressbar"
			// aria-valuenow="80"
			// aria-valuemin="0"
			// aria-valuemax="80"
			/>
		</EnemyStateSection>
	);
}
