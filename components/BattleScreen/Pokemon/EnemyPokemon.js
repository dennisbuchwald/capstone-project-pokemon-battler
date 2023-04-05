import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const enemyPokemonArray = [
	{
		name: "Mewtwo",
		level: 75,
		maxHealth: 120,
		currentHealth: 120,
	},
	{
		name: "Gengar",
		level: 80,
		maxHealth: 130,
		currentHealth: 130,
	},
	{
		name: "Garados",
		level: 85,
		maxHealth: 140,
		currentHealth: 140,
	},
];

export default function EnemyPokemon({ attacking, selectedPokemonIndex }) {
	const selectedPokemon = enemyPokemonArray[selectedPokemonIndex];
	const { name, level } = selectedPokemon;

	return (
		<EnemyPokemonContainer attacking={attacking}>
			<Image
				src={`/sprites/opponent/hard/${name}.gif`}
				alt="mewtwo"
				layout="intrinsic"
				width={240}
				height={240}
			/>
		</EnemyPokemonContainer>
	);
}

const attackAnimation = keyframes`
    0% {
        transform: translate(0, 0) scale(0.6);
    }
    50% {
        transform: translate(-30px, 30px) scale(0.6);
    }
    100% {
        transform: translate(0, 0) scale(0.6);
    }
`;

const EnemyPokemonContainer = styled.figure`
	position: absolute;
	right: -10px;
	top: 20px;
	transform: scale(0.6);
	margin: 0;
	animation: ${({ attacking }) => (attacking ? attackAnimation : "none")} 1s;
`;

const EnemyPokemonCaption = styled.figcaption`
	font-size: 20px;
`;
