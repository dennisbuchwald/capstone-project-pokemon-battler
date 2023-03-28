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
	height: 325px;
	width: 426px;
	left: 282px;
	top: 112px;
	position: relative;
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
