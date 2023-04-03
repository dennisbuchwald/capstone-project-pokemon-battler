import styled, { keyframes } from "styled-components";
import Image from "next/image";

export default function PlayerPokemon({ attacking }) {
	return (
		<PlayerPokemonContainer attacking={attacking}>
			<Image
				src="/sprites/starter/charizard-back.gif"
				alt="glurak"
				layout="intrinsic"
				width={240}
				height={240}
			/>
			{/* <EnemyPokemonCaption>Glurak</EnemyPokemonCaption> */}
		</PlayerPokemonContainer>
	);
}

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
	bottom: 10px;
	left: -20px;
	transform: scale(0.8);
	margin: 0;
	animation: ${({ attacking }) => (attacking ? attackAnimation : "none")} 0.5s;
`;

const PlayerPokemonCaption = styled.figcaption`
	font-size: 14px;
`;
