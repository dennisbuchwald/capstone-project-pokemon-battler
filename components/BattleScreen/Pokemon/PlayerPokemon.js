import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const playerPokemonArray = [
	{
		name: "Bisaflor",
		level: 75,
		maxHealth: 120,
		currentHealth: 120,
		attacks: [
			{ name: "Rasierblatt", damage: 55 },
			{ name: "Solarstrahl", damage: 120 },
			{ name: "Toxin", damage: 15 },
		],
	},
	{
		name: "Turtok",
		level: 80,
		maxHealth: 120,
		currentHealth: 120,
		attacks: [
			{ name: "Aquaknarre", damage: 40 },
			{ name: "Hydropumpe", damage: 110 },
			{ name: "Eisstrahl", damage: 90 },
		],
	},
	{
		name: "Glurak",
		level: 85,
		maxHealth: 120,
		currentHealth: 120,
		attacks: [
			{ name: "Flammenwurf", damage: 90 },
			{ name: "Feuersturm", damage: 110 },
			{ name: "Drachenklaue", damage: 80 },
		],
	},
];

export default function PlayerPokemon({
	attacking,
	selectedPlayerPokemonIndex,
}) {
	const selectedPokemon = playerPokemonArray[selectedPlayerPokemonIndex];

	const scaleFactor = getScaleFactor(selectedPokemon.name);

	return (
		<PlayerPokemonContainer attacking={attacking}>
			<StyledImage
				src={`/sprites/starter/${selectedPokemon.name}-back.gif`}
				alt={selectedPokemon.name}
				layout="intrinsic"
				width={200 * scaleFactor}
				height={200 * scaleFactor}
			/>
		</PlayerPokemonContainer>
	);
}

function getScaleFactor(pokemonName) {
	switch (pokemonName) {
		case "Bisaflor":
			return 0.65;
		case "Turtok":
			return 0.65;
		case "Glurak":
			return 0.8;
		default:
			return 1;
	}
}

const StyledImage = styled(Image)`
	object-fit: contain;
`;

const attackAnimation = keyframes`
    0% {
        transform: translate(0, 0) scale(0.8);
    }
    50% {
        transform: translate(40px, -40px) scale(0.8);
    }
    100% {
        transform: translate(0, 0) scale(0.8);
    }
`;

const PlayerPokemonContainer = styled.figure`
	position: absolute;
	bottom: 15%;
	left: 5%;
	transform: scale(1);
	margin: 0;
	animation: ${({ attacking }) => (attacking ? attackAnimation : "none")} 0.5s;
`;
