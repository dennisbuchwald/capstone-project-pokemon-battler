import styled from "styled-components";
import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./PlayerState/PlayerState";
import EnemyPokemon from "./Pokemon/EnemyPokemon";
import EnemyState from "./EnemyState/EnemyState";
import Menu from "./Menu/Menu";

// ScreenContainer styled component
const ScreenContainer = styled.div`
	background-image: url("/background/background-middle.png");
	background-size: 426px 250px;
	display: block;
	font-size: 10px;
	height: 325px;
	width: 426px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border: solid red;
`;

// ParentContainer styled component
const ParentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	position: relative;
`;

// BattleScreen component
export default function BattleScreen() {
	return (
		<ParentContainer>
			<ScreenContainer>
				<PlayerState />
				<PlayerPokemon />
				<EnemyPokemon />
				<EnemyState />
				<Menu />
			</ScreenContainer>
		</ParentContainer>
	);
}
