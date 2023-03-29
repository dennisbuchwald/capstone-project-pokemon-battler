import styled from "styled-components";
import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./PlayerState/PlayerState";
import EnemyPokemon from "./Pokemon/EnemyPokemon";
import EnemyState from "./EnemyState/EnemyState";
import Menu from "./Menu/Menu";

const ScreenContainer = styled.div`
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

export default function BattleScreen() {
	return (
		<ScreenContainer>
			<PlayerState />
			<PlayerPokemon />
			<EnemyPokemon />
			<EnemyState />
			<Menu />
		</ScreenContainer>
	);
}
