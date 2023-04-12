import styled from "styled-components";
import Image from "next/image";

export default function OpponentSelection({ onOpponentSelect }) {
	const opponent = [
		{
			id: 0,
			name: "misty",
			difficultyLevel: "Einfach",
			pokemons: [
				{
					name: "menki",
					image: "/sprites/opponent/menki.gif",
					level: 15,
					maxHealth: 20,
					currentHealth: 20,
				},
				{
					name: "taubsi",
					image: "/sprites/opponent/taubsi.gif",
					level: 15,
					maxHealth: 20,
					currentHealth: 20,
				},
				{
					name: "pikachu",
					image: "/sprites/opponent/pikachu.gif",
					level: 85,
					maxHealth: 140,
					currentHealth: 140,
				},
			],
		},
		{
			id: 1,
			name: "prof. eich",
			difficultyLevel: "Mittel",
			pokemons: [
				{
					name: "aerodactyl",
					image: "/sprites/opponent/aerodactyl.gif",
					level: 35,
					maxHealth: 50,
					currentHealth: 50,
				},
				{
					name: "kadabra",
					image: "/sprites/opponent/kadabra.gif",
					level: 35,
					maxHealth: 50,
					currentHealth: 50,
				},
				{
					name: "maschock",
					image: "/sprites/opponent/maschock.gif",
					level: 35,
					maxHealth: 50,
					currentHealth: 50,
				},
			],
		},
		{
			id: 2,
			name: "garry",
			difficultyLevel: "Schwer",
			pokemons: [
				{
					name: "garados",
					image: "/sprites/starter/hard/garados.gif",
					level: 85,
					maxHealth: 140,
					currentHealth: 140,
				},
				{
					name: "mewtwo",
					image: "/sprites/starter/hard/mewtwo.gif",
					level: 75,
					maxHealth: 120,
					currentHealth: 120,
				},
				{
					name: "gengar",
					image: "/sprites/starter/hard/gengar.gif",
					level: 80,
					maxHealth: 130,
					currentHealth: 130,
				},
			],
		},
	];

	const handleSelect = (selectedOpponent) => {
		onOpponentSelect(selectedOpponent.pokemons);
	};

	return (
		<SelectionContainer>
			<Title>Waehle deinen Gegner</Title>
			<OpponentList>
				{opponent.map((opponent) => (
					<Opponent key={opponent.id} onClick={() => handleSelect(opponent)}>
						<Image
							src={`/sprites/character/${opponent.id}.png`}
							alt={opponent.name}
							width={80}
							height={80}
						/>
						<OpponentName>{opponent.name}</OpponentName>
						<OpponentLevel>{opponent.difficultyLevel}</OpponentLevel>
					</Opponent>
				))}
			</OpponentList>
		</SelectionContainer>
	);
}

const SelectionContainer = styled.div`
	background-color: lightgrey;
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
	margin-top: 30%;
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
