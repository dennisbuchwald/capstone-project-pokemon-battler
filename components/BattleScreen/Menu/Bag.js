import React from "react";
import styled from "styled-components";
import SoundEffects from "../SoundEffect/SoundEffect";

export default function Bag({ onPotionUse, onClose, potionCount }) {
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
				{potionCount}x Supertrank
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
	width: 44%;
	height: 60px;
	right: 2%;
	bottom: 13%;
	z-index: 2;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 0px;
	grid-auto-columns: minmax(0, 1fr);
`;

const BagButton = styled.button`
	text-transform: uppercase;

	position: relative;
	font-family: "PokemonFireRed", "Press Start 2P", -apple-system,
		BlinkMacSystemFont, Segoe UI;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	border: none;
	min-width: 0;
	display: inline-block;
	margin: 2px;
	padding: 5px 0 5px 5px;
	background-color: lightgray;
	border-radius: 7px;
	box-shadow: 0 0.2em gray;
	cursor: pointer;

	&:active {
		box-shadow: none;
		position: relative;
		top: 0.2em;
	}
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
