import React from "react";

import styled from "styled-components";
import SoundEffects from "../SoundEffect/SoundEffect";

export default function Bag({ onPotionUse, onClose }) {
	const handleBagClick = () => {
		onPotionUse();
		playSound("menuSound");
	};

	const [playSound, stopSound] = SoundEffects();
	const [hoveredButton, setHoveredButton] = React.useState(null);

	return (
		<BagContainer>
			<BagButton
				onClick={() => {
					handleBagClick();
					playSound("menuSound");
				}}
				onMouseEnter={() => {
					playSound("menuSound");
					setHoveredButton(1);
				}}
				onMouseLeave={() => {
					stopSound("menuSound");
					setHoveredButton(null);
				}}
			>
				{hoveredButton === 1 && <CursorImage src="/sprites/cursor.png" />}
				Trank
			</BagButton>
			<BagButtonBack
				onClick={onClose}
				onMouseEnter={() => {
					playSound("menuSound");
					setHoveredButton(2);
				}}
				onMouseLeave={() => {
					stopSound("menuSound");
					setHoveredButton(null);
				}}
			>
				{hoveredButton === 2 && <CursorImage src="/sprites/cursor.png" />}
				Zurueck
			</BagButtonBack>
		</BagContainer>
	);
}

const BagContainer = styled.section`
	position: absolute;
	width: 50%;
	height: 89%%;
	left: 6%;
	bottom: 24%;
	z-index: 2;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 0px;
`;

const BagButton = styled.button`
	position: relative;
	background-color: transparent;
	color: white;
	font-family: "PokemonFireRed", "Press Start 2P", -apple-system,
		BlinkMacSystemFont, Segoe UI;
	font-size: 20px;
	cursor: pointer;
	text-align: left;
	border: none;
`;

const BagButtonBack = styled(BagButton)`
	grid-column: 2 / 2;
	grid-row: 2 / 2;
`;

const CursorImage = styled.img`
	position: absolute;
	left: -7px;
	top: 50%;
	transform: translateY(-50%);
	width: 10px;
	height: auto;
`;
