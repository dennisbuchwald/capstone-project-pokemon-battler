import styled from "styled-components";
import Image from "next/image";
import opponents from "../../data/opponents.json";

export default function OpponentSelection({ onSelect }) {
	const handleSelect = (selectedOpponent) => {
		onSelect(selectedOpponent.pokemons);
	};

	return (
		<SelectionContainer>
			<Title>Waehle deinen Gegner</Title>
			<OpponentList>
				{opponents.map((opponent) => (
					<Opponent key={opponent.id}>
						<Button onClick={() => handleSelect(opponent)}>
							<Image
								src={`/sprites/character/${opponent.id}.png`}
								alt={opponent.name}
								width={80}
								height={80}
							/>
							<OpponentName>{opponent.name}</OpponentName>
							<OpponentLevel>{opponent.difficultyLevel}</OpponentLevel>
						</Button>
					</Opponent>
				))}
			</OpponentList>
		</SelectionContainer>
	);
}

const Button = styled.button`
	all: unset;
`;

const SelectionContainer = styled.div`
	background-color: white;
	background-size: 426px 250px;
	display: block;
	font-size: 10px;
	max-height: 325px;
	max-width: 426px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
`;

const Title = styled.h2`
	text-align: center;
	margin-top: 20%;
	font-size: 40px;
`;

const OpponentList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style-type: none;
	padding: 0;
	margin-top: -5%;
`;

const Opponent = styled.li`
	cursor: pointer;
	margin: 0 10px;
	&:hover {
		transform: scale(1.1);
	}
`;

const OpponentName = styled.p`
	margin-top: 5px;
	font-size: 30px;
	text-align: center;
	text-transform: uppercase;
`;

const OpponentLevel = styled.p`
	margin-top: -30px;
	font-size: 15px;
	text-align: center;
	text-transform: uppercase;
`;
