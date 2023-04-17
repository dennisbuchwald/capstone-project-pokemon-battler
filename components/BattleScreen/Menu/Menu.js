import styled from "styled-components";
import { useState } from "react";
import AttackMenu from "./AttackMenu";
import SoundEffects from "../SoundEffect/SoundEffect";
import Bag from "./Bag";

const Menu = ({ onAttack, onPotionUse, disabled, attacks }) => {
	const [showAttackMenu, setShowAttackMenu] = useState(false);
	const [showBag, setShowBag] = useState(false);
	const [playSound, stopSound] = SoundEffects();
	const [hoveredButton, setHoveredButton] = useState(null);
	const [potionCount, setPotionCount] = useState(3);

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

	const handleBagClick = () => {
		if (!disabled) {
			setShowBag(true);
		}
	};

	const handlePotionUse = () => {
		const healthToRestore = 50;
		if (potionCount > 0) {
			onPotionUse(healthToRestore);
			setPotionCount(potionCount - 1);
			setShowBag(false);
		}
	};
	const handleBagClose = () => {
		setShowBag(false);
	};

	return (
		<MenuContainer>
			{showAttackMenu ? (
				<AttackMenu
					onAttackSelection={handleAttackSelection}
					onBackButtonClick={handleCloseMenu}
					attacks={attacks}
				/>
			) : showBag ? (
				<Bag
					onPotionUse={handlePotionUse}
					onClose={handleBagClose}
					potionCount={potionCount}
				/>
			) : (
				<MenuOverviewBox>
					<MenuOverviewBoxLeft>
						<p>Was soll dein Pokemon tun?</p>
					</MenuOverviewBoxLeft>
					<MenuOverviewBoxRight>
						<MenuButtonFight
							onMouseEnter={() => {
								playSound("menuSound");
								setHoveredButton(1);
							}}
							onMouseLeave={() => {
								stopSound("menuSound");
								setHoveredButton(null);
							}}
							onClick={handleAttackClick}
							disabled={disabled}
						>
							{hoveredButton === 1 && <CursorImage src="/sprites/cursor.png" />}
							Kampf
						</MenuButtonFight>
						<MenuButtonBag
							onMouseEnter={() => {
								playSound("menuSound");
								setHoveredButton(2);
							}}
							onMouseLeave={() => {
								stopSound("menuSound");
								setHoveredButton(null);
							}}
							onClick={handleBagClick}
							disabled={disabled}
						>
							{hoveredButton === 2 && <CursorImage src="/sprites/cursor.png" />}
							Beutel
						</MenuButtonBag>
						<MenuButtonRun
							onMouseEnter={() => {
								playSound("menuSound");
								setHoveredButton(4);
							}}
							onMouseLeave={() => {
								stopSound("menuSound");
								setHoveredButton(null);
							}}
							onClick={() => {
								window.location.reload();
							}}
							disabled={disabled}
						>
							{hoveredButton === 4 && <CursorImage src="/sprites/cursor.png" />}
							Flucht
						</MenuButtonRun>
					</MenuOverviewBoxRight>
				</MenuOverviewBox>
			)}
		</MenuContainer>
	);
};

export default Menu;

const MenuContainer = styled.section`
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

const MenuOverviewBoxRight = styled.section`
	width: 50%;
	right: -5%;
	position: relative;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 0px;
	text-align: left;
`;

const CursorImage = styled.img`
	position: absolute;
	left: -7px;
	top: 50%;
	transform: translateY(-50%);
	width: 10px;
	height: auto;
`;

const MenuButton = styled.button`
	position: relative;
	background-color: transparent;
	color: black;
	font-family: "PokemonFireRed", "Press Start 2P", -apple-system,
		BlinkMacSystemFont, Segoe UI;
	font-size: 20px;
	cursor: pointer;
	text-align: left;
	border: none;
`;

const MenuButtonFight = styled(MenuButton)`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
`;

const MenuButtonBag = styled(MenuButton)`
	grid-column: 2 / 3;
	grid-row: 1 / 2;
`;

const MenuButtonPokemon = styled(MenuButton)`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
`;

const MenuButtonRun = styled(MenuButton)`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
`;
