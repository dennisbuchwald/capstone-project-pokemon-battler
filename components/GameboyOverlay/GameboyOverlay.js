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
	width: 550px;
	height: 1000px;
	max-width: 550px;
	max-height: 1000px;
	position: relative;
	margin: 0 auto;
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
