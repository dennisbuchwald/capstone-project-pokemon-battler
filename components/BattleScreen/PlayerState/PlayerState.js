import styled from "styled-components";

export default function PlayerState({ currentHealth }) {
	const maxHealth = 120;
	const healthPercent = Math.floor((currentHealth / maxHealth) * 100);

	return (
		<PlayerStateSection>
			<PokemonName>Glurak</PokemonName>
			<PokemonLevelTitel>Lv.</PokemonLevelTitel>
			<PokemonLevel>69</PokemonLevel>
			<PokemonHealth>{currentHealth}</PokemonHealth>
			<PokemonHealthBar value={healthPercent} max="100"></PokemonHealthBar>
			<PokemonSlashHealth>/</PokemonSlashHealth>
			<PokemonMaxHealth>{maxHealth}</PokemonMaxHealth>
		</PlayerStateSection>
	);
}

const PlayerStateSection = styled.section`
	position: absolute;
	top: 165px;
	right: 0px;
	background-image: url("/sprites/statusbar-player3.png");
	width: 200px;
	height: 68px;
	background-repeat: no-repeat;
	background-size: contain;
	z-index: 1;
`;

const PokemonName = styled.p`
	position: absolute;
	top: 5px;
	left: 30px;
	z-index: 1;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
	text-transform: uppercase;
	margin: 0;
	padding: 0;
`;

const PokemonLevel = styled.span`
	position: absolute;
	top: 5px;
	right: 29px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
	margin: 0;
	padding: 0;
`;

const PokemonLevelTitel = styled.span`
	position: absolute;
	top: 5px;
	right: 50px;
	z-index: 10;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 20px;
	margin: 0;
	padding: 0;
`;

const PokemonHealth = styled.span`
	position: absolute;
	top: 40px;
	right: 55px;
	z-index: 11;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 15px;
	margin: 0;
	padding: 0;
`;

const PokemonSlashHealth = styled.span`
	position: absolute;
	top: 40px;
	right: 45px;
	z-index: 1;
	text-shadow: 1px 1px 0px #b7b7b7;
	font-size: 15px;
	margin: 0;
	padding: 0;
`;

const PokemonMaxHealth = styled.span`
	position: absolute;
	top: 40px;
	right: 25px;
	z-index: 1;
	text-shadow: 1px b7b7b7;
	font-size: 15px;
	margin: 0;
	padding: 0;
`;

const PokemonHealthBar = styled.progress`
	position: absolute;
	height: 6px;
	width: 89px;
	left: 88px;
	top: 31px;
	z-index: 1;
	apperance: none;
	&::webkit-progressbar-bar {
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
