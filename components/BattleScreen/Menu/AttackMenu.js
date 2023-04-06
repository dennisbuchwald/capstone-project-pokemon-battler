import React from "react";
import styled, { css } from "styled-components";
import SoundEffects from "../SoundEffect/SoundEffect";

const AttackMenu = ({ onAttackSelection, onBackButtonClick }) => {
	const attacks = [
		{ name: "Flammenwurf", damage: 60 },
		{ name: "Feuersturm", damage: 40 },
		{ name: "Drachenklaue", damage: 30 },
	];
	const handleAttackClick = (damage) => {
		onAttackSelection(damage);
	};

	const [playSound, stopSound] = SoundEffects();
	const [hoveredButton, setHoveredButton] = React.useState(null);

	return (
		<AttackMenuContainer>
			<AttackButtonOne
				onClick={() => {
					handleAttackClick(attacks[0].damage);
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
				{attacks[0].name}
			</AttackButtonOne>
			<AttackButtonTwo
				onClick={() => {
					handleAttackClick(attacks[1].damage);
					playSound("menuSound");
				}}
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
				{attacks[1].name}
			</AttackButtonTwo>
			<AttackButtonThree
				onClick={() => {
					handleAttackClick(attacks[2].damage);
					playSound("menuSound");
				}}
				onMouseEnter={() => {
					playSound("menuSound");
					setHoveredButton(3);
				}}
				onMouseLeave={() => {
					stopSound("menuSound");
					setHoveredButton(null);
				}}
			>
				{hoveredButton === 3 && <CursorImage src="/sprites/cursor.png" />}
				{attacks[2].name}
			</AttackButtonThree>
			<AttackButtonBack
				onMouseEnter={() => {
					playSound("menuSound");
					setHoveredButton(4);
				}}
				onMouseLeave={() => {
					stopSound("menuSound");
					setHoveredButton(null);
				}}
				onClick={onBackButtonClick}
			>
				{hoveredButton === 4 && <CursorImage src="/sprites/cursor.png" />}
				Zurueck
			</AttackButtonBack>
		</AttackMenuContainer>
	);
};

const AttackMenuContainer = styled.section`
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
`;

const AttackButtonOne = styled(AttackButton)`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
`;

const AttackButtonTwo = styled(AttackButton)`
	grid-column: 2 / 3;
	grid-row: 1 / 2;
`;

const AttackButtonThree = styled(AttackButton)`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
`;

const AttackButtonBack = styled(AttackButton)`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	background-color: transparent;
	border: none;
`;

export default AttackMenu;
