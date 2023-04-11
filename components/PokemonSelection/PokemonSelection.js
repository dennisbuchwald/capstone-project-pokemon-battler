import styled from "styled-components";
import Image from "next/image";

export default function PokemonSelection({ onSelect }) {
	const pokemons = [
		{
			name: "Bisaflor",
			image: "/sprites/starter/venusaur-back.gif",
			maxHealth: 120,
			currentHealth: 120,
			level: 55,
			attacks: [
				{ name: "Rasierblatt", damage: 55 },
				{ name: "Solarstrahl", damage: 120 },
				{ name: "Gifthieb", damage: 40 },
			],
		},
		{
			name: "Glurak",
			image: "/sprites/starter/charizard-back.gif",
			maxHealth: 120,
			currentHealth: 120,
			level: 63,
			attacks: [
				{ name: "Flammenwurf", damage: 90 },
				{ name: "Feuersturm", damage: 110 },
				{ name: "Drachenklaue", damage: 80 },
			],
		},
		{
			name: "Turtok",
			image: "/sprites/starter/blastoise-back.gif",
			maxHealth: 120,
			currentHealth: 120,
			level: 59,
			attacks: [
				{ name: "Aquaknarre", damage: 40 },
				{ name: "Hydropumpe", damage: 110 },
				{ name: "Eisstrahl", damage: 90 },
			],
		},
	];

	const handleSelect = (selectedPokemon) => {
		onSelect(selectedPokemon);
	};

	return (
		<SelectionContainer>
			<Title>Waehle dein Pokémon</Title>
			<PokemonList>
				{pokemons.map((pokemon, index) => (
					<Pokemon key={index} onClick={() => handleSelect(pokemon)}>
						<Image
							src="/sprites/masterball.png"
							alt={pokemon.name}
							width={80}
							height={80}
						/>
						<PokemonName>{pokemon.name}</PokemonName>
					</Pokemon>
				))}
			</PokemonList>
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

const PokemonName = styled.p`
	margin-top: 5px;
	font-size: 18px;
	text-align: center;
`;

const Title = styled.h2`
	text-align: center;
	margin-top: 30%;
	font-size: 40px;
`;

const PokemonList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style-type: none;
	padding: 0;
	margin-top: -5%;
`;

const Pokemon = styled.li`
	cursor: pointer;
	margin: 0 10px;
	&:hover {
		transform: scale(1.1);
	}
`;
