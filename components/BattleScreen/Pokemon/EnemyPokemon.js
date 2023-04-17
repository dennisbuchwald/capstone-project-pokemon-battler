import styled, { keyframes, css } from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import SoundEffect from "../SoundEffect/SoundEffect";

export default function EnemyPokemon({
	attacking,
	wasAttacked,
	selectedPokemon,
}) {
	const { name, level, currentHealth, maxHealth, scale } = selectedPokemon;

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
					src={`/sprites/opponent/${name}.gif`}
					alt={`${name}`}
					width={150}
					height={100 * scale}
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
	right: -15%;
	top: 5%;
	animation: ${({ isDamaged }) =>
		isDamaged
			? css`
					${damageAnimation} 0.5s
			  `
			: "none"};
`;
