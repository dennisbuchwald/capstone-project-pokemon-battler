import styled, { keyframes, css } from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import SoundEffect from "../SoundEffect/SoundEffect";

export const enemyPokemonArray = [
	{ name: "mewtwo", level: 75, maxHealth: 120, currentHealth: 120 },
	{ name: "gengar", level: 80, maxHealth: 130, currentHealth: 130 },
	{ name: "garados", level: 85, maxHealth: 140, currentHealth: 140 },
];

export default function EnemyPokemon({
	attacking,
	wasAttacked,
	selectedPokemonIndex,
}) {
	const selectedPokemon = enemyPokemonArray[selectedPokemonIndex];
	const { name, level, currentHealth, maxHealth } = selectedPokemon;

	const [isDamaged, setIsDamaged] = useState(false);

	useEffect(() => {
		if (wasAttacked) {
			setIsDamaged(true);
			setTimeout(() => {
				setIsDamaged(false);
			}, 500);
		}
	}, [wasAttacked]);

	const [playSound] = SoundEffect();

	useEffect(() => {
		if (isDamaged) {
			playSound("attackedSound");
		}
	}, [isDamaged, playSound]);

	return (
		<BlinkingEnemyPokemonContainer isDamaged={isDamaged}>
			<EnemyPokemonContainer attacking={attacking}>
				<StyledImage
					src={`/sprites/opponent/hard/${name}.gif`}
					alt={`${name}`}
					width={150}
					height={100}
				/>
			</EnemyPokemonContainer>
		</BlinkingEnemyPokemonContainer>
	);
}

const StyledImage = styled(Image)`
	object-fit: contain;
`;

const attackAnimation = keyframes`
	0% {
		transform: translate(0, 0) scale(1);
	}
	50% {
		transform: translate(-30px, 30px) scale(1);
	}
	100% {
		transform: translate(0, 0) scale(1);
	}
`;

const EnemyPokemonContainer = styled.figure`
	position: absolute;
	right: -8%;
	top: 15%;
	animation: ${({ attacking }) => (attacking ? attackAnimation : "none")} 0.4s;
`;

const damageAnimation = keyframes`
	0% { opacity: 1; }
	10% { opacity: 0.1; }
	20% { opacity: 1; }
	30% { opacity: 0.1; }
	40% { opacity: 1; }
	50% { opacity: 0.1; }
	60% { opacity: 1; }
	70% { opacity: 0.1; }
	80% { opacity: 1; }
	90% { opacity: 0.1; }
	100% { opacity: 1; }
`;

const BlinkingEnemyPokemonContainer = styled.figure`
	position: absolute;
	right: -8%;
	top: 15%;
	animation: ${({ isDamaged }) =>
		isDamaged
			? css`
					${damageAnimation} 0.5s
			  `
			: "none"};
`;
