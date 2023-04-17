import styled from "styled-components";
import BattleScreen from "../BattleScreen/BattleScreen";

function GameboyOverlay() {
	return (
		<OverlayContainer>
			<BattleScreenWrapper>
				<BattleScreen />
			</BattleScreenWrapper>
			<OverlayImage />
		</OverlayContainer>
	);
}

const OverlayContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 550px; // Gameboy Breite anpassen
	height: 1000px; // Gameboy Höhe anpassen
	max-width: 550px; // Maximale Gameboy Breite anpassen
	max-height: 1000px; // Maximale Gameboy Höhe anpassen
	position: relative;
	margin: 0 auto; // Zentriert den Gameboy-Container horizontal
`;

const BattleScreenWrapper = styled.div`
	position: absolute;
	left: 50%;
	top: 22%;
	transform: translate(-50%, -50%);
	width: 390px;
	height: 280px;
	overflow: hidden;
	z-index: 1;
`;

const OverlayImage = styled.div`
	background-image: url("/gba-sp-overlay.png");
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 2;
	pointer-events: none;
`;

export default GameboyOverlay;
