import styled from "styled-components";
import { useState } from "react";
import AttackMenu from "./AttackMenu";

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

	const handleCloseMenu = () => {
		setShowAttackMenu(false);
	};

	return (
		<MenuContainer>
			{showAttackMenu ? (
				<AttackMenu
					onAttackSelection={handleAttackSelection}
					onBackButtonClick={handleCloseMenu}
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
	left: -1%;
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
	font-family: "PokemonFireRed", -apple-system, BlinkMacSystemFont, Segoe UI;
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
