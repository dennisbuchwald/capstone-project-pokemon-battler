import React from "react";
import styled, { css } from "styled-components";
import SoundEffects from "../SoundEffect/SoundEffect";

const AttackMenu = ({ onAttackSelection, onBackButtonClick, attacks }) => {
	const handleAttackClick = (index) => {
		onAttackSelection(index);
		playSound("menuSound");
	};

	const [playSound, stopSound] = SoundEffects();
	const [hoveredButton, setHoveredButton] = React.useState(null);

	return (
		<AttackMenuContainer>
			{attacks.map((attack, index) => (
				<AttackButton
					key={index}
					onClick={() => {
						handleAttackClick(index);
						playSound("menuSound");
					}}
					onMouseEnter={() => {
						playSound("menuSound");
						setHoveredButton(index + 1);
					}}
					onMouseLeave={() => {
						stopSound("menuSound");
						setHoveredButton(null);
					}}
				>
					{hoveredButton === index + 1 && (
						<CursorImage src="/sprites/cursor.png" />
					)}
					{attack.name}
				</AttackButton>
			))}
			<AttackButtonBack
				onMouseEnter={() => {
					playSound("menuSound");
					setHoveredButton(attacks.length + 1);
				}}
				onMouseLeave={() => {
					stopSound("menuSound");
					setHoveredButton(null);
				}}
				onClick={onBackButtonClick}
			>
				{hoveredButton === attacks.length + 1 && (
					<CursorImage src="/sprites/cursor.png" />
				)}
				Zurueck
			</AttackButtonBack>
		</AttackMenuContainer>
	);
};

const AttackMenuContainer = styled.section`
	position: absolute;
	width: 45%;
	height: 89%%;
	left: 4.5%;
	bottom: 24%;
	z-index: 2;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: -0px;
	grid-auto-columns: minmax(0, 1fr);
`;

const CursorImage = styled.img`
	position: absolute;
	left: -7px;
	top: 50%;
	transform: translateY(-50%);
	width: 10px;
	height: auto;
`;

const AttackButton = styled.button`
	position: relative;
	background-color: transparent;
	color: white;
	font-family: "PokemonFireRed", "Press Start 2P", -apple-system,
		BlinkMacSystemFont, Segoe UI;
	font-size: 20px;
	cursor: pointer;
	text-align: left;
	border: none;
	min-width: 0;
`;

const AttackButtonBack = styled(AttackButton)`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
`;

export default AttackMenu;
