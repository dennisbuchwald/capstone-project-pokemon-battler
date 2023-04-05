import styled from "styled-components";

const AttackMenu = ({ onAttackSelection, onBackButtonClick }) => {
	const attacks = [
		{ name: "Flammenwurf", damage: 160 },
		{ name: "Feuersturm", damage: 40 },
		{ name: "Drachenklaue", damage: 30 },
	];
	const handleAttackClick = (damage) => {
		onAttackSelection(damage);
	};

	return (
		<AttackMenuContainer>
			<AttackButtonOne onClick={() => handleAttackClick(attacks[0].damage)}>
				{attacks[0].name}
			</AttackButtonOne>
			<AttackButtonTwo onClick={() => handleAttackClick(attacks[1].damage)}>
				{attacks[1].name}
			</AttackButtonTwo>
			<AttackButtonThree onClick={() => handleAttackClick(attacks[2].damage)}>
				{attacks[2].name}
			</AttackButtonThree>
			<AttackButtonBack onClick={onBackButtonClick}>Zurueck</AttackButtonBack>
		</AttackMenuContainer>
	);
};

const AttackMenuContainer = styled.section`
	position: absolute;
	width: 50%;
	height: 89%%;
	left: 3%;
	bottom: 18%;
	z-index: 2;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 0px;
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
