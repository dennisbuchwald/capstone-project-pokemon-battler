import styled, { css, keyframes } from "styled-components";
import Image from "next/image";

export default function PlayerPokemon({ attacking, isDamaged }) {
	return (
		<BlinkingPokemonContainer isDamaged={isDamaged}>
			<PlayerPokemonContainer attacking={attacking}>
				<Image
					src="/sprites/starter/charizard-back.gif"
					alt="glurak"
					layout="intrinsic"
					width={240}
					height={240}
				/>
			</PlayerPokemonContainer>
		</BlinkingPokemonContainer>
	);
}

const BlinkingPokemonContainer = styled.figure`
	position: absolute;
	bottom: 10px;
	left: -20px;
	transform: scale(0.8);
	margin: 0;
	animation: ${({ isDamaged }) =>
		isDamaged
			? css`
					${damageAnimation} 0.25s
			  `
			: "none"};
`;

const PlayerPokemonContainer = styled.figure`
	position: relative;
	margin: 0;
	animation: ${({ attacking }) => (attacking ? attackAnimation : "none")} 0.5s;
`;

const damageAnimation = keyframes`
	0% { opacity: 1; }
	10% { opacity: 0.5; }
	20% { opacity: 1; }
	30% { opacity: 0.5; }
	40% { opacity: 1; }
	50% { opacity: 0.5; }
	60% { opacity: 1; }
	70% { opacity: 0.5; }
	80% { opacity: 1; }
	90% { opacity: 0.5; }
	100% { opacity: 1; }
`;

const attackAnimation = keyframes`
	0% {
		transform: translate(0, 0) scale(1);
	}
	50% {
		transform: translate(40px, -40px) scale(1);
	}
	100% {
		transform: translate(0, 0) scale(1);
	}
`;
