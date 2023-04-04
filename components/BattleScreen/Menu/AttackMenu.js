import styled from "styled-components";

const AttackMenu = ({
	onAttackSelection,
	onBackButtonClick,
	selectedPokemon,
}) => {
	const attacks = selectedPokemon.attacks;

	const handleAttackClick = (damage) => {
		onAttackSelection(damage);
	};

	return (
		<AttackMenuContainer>
			{attacks.map((attack, index) => (
				<AttackButton
					key={index}
					onClick={() => handleAttackClick(attack.damage)}
				>
					{attack.name}
				</AttackButton>
			))}
			<AttackButtonBack onClick={onBackButtonClick}>Zurueck</AttackButtonBack>
		</AttackMenuContainer>
	);
};
export default AttackMenu;

const AttackMenuContainer = styled.section`
	position: absolute;
	width: 50%;
	height: 89%%;
	left: 4%;
	bottom: 25%;
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
