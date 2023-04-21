import { useState } from "react";
import styled from "styled-components";
import AttackMenu from "./AttackMenu";
import SoundEffects from "../SoundEffect/SoundEffect";
import Bag from "./Bag";

const Menu = ({
  onAttack,
  onPotionUse,
  disabled,
  attacks,
  name,
  onResetSelection,
}) => {
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
            <p>
              Was soll <span>{name}</span> tun?
            </p>
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
                onResetSelection();
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
  background-image: url("/sprites/text-box-mod3.png");
  background-size: cover;
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
  font-size: 1.5rem;
  position: relative;
  left: 0px;
  top: -10px;
  font-size: 25px;
  span {
    text-transform: uppercase;
  }
`;

const MenuOverviewBoxRight = styled.section`
  grid-gap: 5px;
  position: absolute;
  background-image: url("/sprites/menu-options-box.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 44%;
  right: 0.5%;
  position: absolute;
  height: 80px;
  bottom: 0%;
  z-index: 2;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0px;
  grid-auto-columns: minmax(0, 1fr);
`;

const CursorImage = styled.img`
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: auto;
`;
const MenuButton = styled.button`
  margin: 1px;
  bottom: 7%;
  color: black;
  position: relative;
  font-family: "PokemonFireRed", "Press Start 2P", -apple-system,
    BlinkMacSystemFont, Segoe UI;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  min-width: 0;
  display: inline-block;
  margin: 2.5px;
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

const MenuButtonFight = styled(MenuButton)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-color: #ff4747; // Rot
  &:hover {
    background-color: #e63b3b; // Dunkleres Rot für Hover-Effekt
  }
`;

const MenuButtonBag = styled(MenuButton)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: #ffd700; // Gelb
  &:hover {
    background-color: #e6c200; // Dunkleres Gelb für Hover-Effekt
  }
`;

const MenuButtonPokemon = styled(MenuButton)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const MenuButtonRun = styled(MenuButton)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: #4a90e2; // Blau
  &:hover {
    background-color: #3f7dcb; // Dunkleres Blau für Hover-Effekt
  }
`;
