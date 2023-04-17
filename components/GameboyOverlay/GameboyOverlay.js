import styled from "styled-components";
import BattleScreen from "../BattleScreen/BattleScreen";
import { useState, useEffect } from "react";

function GameboyOverlay() {
	const [ledOn, setLedOn] = useState(true);

	useEffect(() => {
		const toggleLED = () => {
			setLedOn(false);
			setTimeout(() => setLedOn(true), 75); // LED nach 20 ms wieder einschalten
		};

		const randomTimeout = Math.random() * 12000 + 8000; // Zufällige Zeit zwischen 8 und 20 Sekunden
		const timeoutId = setTimeout(toggleLED, randomTimeout);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [ledOn]);

	return (
		<OverlayContainer>
			<BattleScreenWrapper>
				<BattleScreen />
			</BattleScreenWrapper>
			<OverlayImage />
			{ledOn && <LED />}
		</OverlayContainer>
	);
}

const OverlayContainer = styled.section`
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

const BattleScreenWrapper = styled.section`
	position: absolute;
	left: 50%;
	top: 22%;
	transform: translate(-50%, -50%);
	width: 390px;
	height: 280px;
	overflow: hidden;
	z-index: 1;
`;

const OverlayImage = styled.figure`
	background-image: url("/gba-sp-overlay.png");
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 2;
	pointer-events: none;
`;

const LED = styled.div`
	width: 20px;
	height: 8px;
	background-color: limegreen;
	position: absolute;
	left: 92.9%;
	top: 57.8%;
	z-index: 3;
	border-radius: 2px;
	box-shadow: 0 0 5px limegreen;
`;

export default GameboyOverlay;
