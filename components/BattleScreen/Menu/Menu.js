import styled from "styled-components";
import { useState } from "react";

export default function Menu({ onAttack, disabled }) {
	const [showAttackMenu, setShowAttackMenu] = useState(false);

	const handleAttackClick = () => {
		if (!disabled) {
			setShowAttackMenu(true);
		}
	};

	const handleAttackSelection = (damage) => {
		setShowAttackMenu(false);
		onAttack(damage);
	};

	const handleBackButtonClick = () => {
		setShowAttackMenu(false);
	};

	return (
		<MenuContainer>
			{showAttackMenu ? (
				<AttackMenu
					onAttackSelection={handleAttackSelection}
					onBackButtonClick={handleBackButtonClick}
				/>
			) : (
				<MenuOverviewBox>
					<MenuOverviewBoxLeft>
						<p>Klicke auf Kampf um anzugreifen</p>
					</MenuOverviewBoxLeft>
					<MenuOverviewBoxRight>
						<MenuButtonFight onClick={handleAttackClick} disabled={disabled}>
							Kampf
						</MenuButtonFight>
					</MenuOverviewBoxRight>
				</MenuOverviewBox>
			)}
		</MenuContainer>
	);
}

const AttackMenu = ({ onAttackSelection, onBackButtonClick }) => {
	const attacks = [
		{ name: "Flammenwurf", damage: 60 },
		{ name: "Feuersturm", damage: 40 },
		{ name: "Drachenklaue", damage: 30 },
	];

	const handleAttackClick = (damage) => {
		onAttackSelection(damage);
	};

	return (
		<AttackMenuContainer>
			<AttackButton1 onClick={() => handleAttackClick(attacks[0].damage)}>
				{attacks[0].name}
			</AttackButton1>
			<AttackButton2 onClick={() => handleAttackClick(attacks[1].damage)}>
				{attacks[1].name}
			</AttackButton2>
			<AttackButton3 onClick={() => handleAttackClick(attacks[2].damage)}>
				{attacks[2].name}
			</AttackButton3>
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
	font-size: 20px;
	cursor: pointer;
	text-align: left;
	border: none;
`;

const AttackButton1 = styled(AttackButton)`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
`;

const AttackButton2 = styled(AttackButton)`
	grid-column: 2 / 3;
	grid-row: 1 / 2;
`;

const AttackButton3 = styled(AttackButton)`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
`;

const AttackButtonBack = styled(AttackButton)`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	background-color: transparent;
	border: none;
`;

const MenuContainer = styled.nav`
	position: absolute;
	width: 100%;
	height: 80px;
	z-index: 2;
	bottom: 0;
	background-image: url("/sprites/menu-box.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
	color: white;
`;

const MenuOverviewBox = styled.section`
	display: flex;
	justify-content: space-between;
	flex-basis: 50%;
	width: 100%;
	height: 100%;
	background-size: contain;
	background-repeat: no-repeat;
	padding: 10px 25px;
`;

const MenuOverviewBoxLeft = styled.article`
	width: 50%;
	line-height: 16px;
	position: relative;
	left: 0px;
	top: -10px;
	font-size: 20px;
`;

const MenuOverviewBoxRight = styled.article`
	width: 50%;
	right: 0px;
	position: relative;
	top: 0px;
	left: 0px;
`;

const MenuButton = styled.button`
	position: absolute;
	width: 80px;
	height: 20px;
	border-radius: 13px;
	color: black;
	text-align: left;
	background-color: transparent;
	cursor: pointer;
	left: 10px;
	text-align: left;
	border: none;
	font-size: 20px;
	line-height: 14px;
	display: flex;

	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
		color: black;
	}

	&:active {
		position: relative;
		top: 6px;
	}
`;

const MenuButtonFight = styled(MenuButton)`
	color: black;
	left: 20px;
	top: 6px;
`;

const MenuButtonBag = styled(MenuButton)`
	color: black;
	left: 100px;
	top: 5px;
	text-transform: uppercase;
`;

const MenuButtonPokemon = styled(MenuButton)`
	color: black;
	left: 20px;
	top: 30px;
`;

const MenuButtonRun = styled(MenuButton)`
	color: black;
	left: 100px;
	top: 30px;
	text-transform: uppercase;
`;
