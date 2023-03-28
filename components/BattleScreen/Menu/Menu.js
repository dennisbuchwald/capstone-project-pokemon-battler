import styled from "styled-components";

const MenuContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 80px;
	z-index: 2;
	bottom: 0;
	background-image: url("/sprites/menu-box.png");
	background-size: cover;
	background-repeat: no-repeat;
	color: white;
`;

const MenuOverviewBox = styled.div`
	display: flex;
	justify-content: space-between;
	flex-basis: 50%;
	width: 100%;
	height: 100%;
	background-size: contain;
	background-repeat: no-repeat;
	padding: 10px 25px;
`;

const MenuOverviewBoxLeft = styled.div`
	width: 50%;
	line-height: 16px;
	position: relative;
	left: -10px;
	top: 0px;
`;

const MenuOverviewBoxRight = styled.div`
	width: 50%;
	right: 0px;
	position: relative;
	top: 0px;
	left: 15px;
`;

const MenuButton = styled.div`
	position: absolute;
	width: 101px;
	height: 30px;
	border-radius: 13px;
	color: black;
	text-align: left;
	opacity: 0.8;
	cursor: pointer;
	text-transform: uppercase;
`;

const MenuButtonFight = styled(MenuButton)`
	color: black;
	left: 0px;
	top: 5px;
	text-transform: uppercase;
`;

const MenuButtonBag = styled(MenuButton)`
	color: black;
	left: 100px;
	top: 5px;
	text-transform: uppercase;
`;

const MenuButtonPokemon = styled(MenuButton)`
	color: black;
	left: 0px;
	top: 20px;
	text-transform: uppercase;
`;

const MenuButtonRun = styled(MenuButton)`
	color: black;
	left: 100px;
	top: 20px;
	text-transform: uppercase;
`;

export default function Menu() {
	return (
		<MenuContainer className="menu">
			<div className="menu--overview-box">
				<MenuOverviewBoxLeft className="menu--overview-box-left">
					{/* <p>Klicke auf Kampf um anzugreifen</p> */}
				</MenuOverviewBoxLeft>
				{/* <MenuOverviewBoxRight className="menu--overview-box-right">
					<MenuButtonFight className="btn btn--fight">Kampf</MenuButtonFight>
					<MenuButtonBag className="btn btn--bag">Beutel</MenuButtonBag>
					<MenuButtonPokemon className="btn btn--pokemon">
						POKéMON
					</MenuButtonPokemon>
					<MenuButtonRun className="btn btn--run">Flucht</MenuButtonRun>
				</MenuOverviewBoxRight> */}
			</div>
		</MenuContainer>
	);
}
